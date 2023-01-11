import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Language } from '../../../interfaces/language';
import { BrowserService } from '../../../services/browser.service';
import { DocumentationService } from '../../../services/documentation.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  /**
   * 対応済みサイトかどか
   */
  isValidSite: boolean = false;
  /**
   * 対応言語
   */
  languages: Language[] = [];

  constructor(
    private _docService: DocumentationService,
    private _browserService: BrowserService
  ) {}

  async ngOnInit() {
    const doc = await this._docService.search();
    this.isValidSite = !!doc;
    this.languages = this._docService.supportedLanguages;
  }

  formInitialized(name: string, form: AbstractControl) {
    this.formGroup.setControl(name, form);
  }

  /**
   * 言語を変更する
   * @param openType 開き方
   */
  onSwitch(openType: 'CurrentTab' | 'NewTab' | 'NewWindow') {
    const selected = this.formGroup.get('language')?.value as Language;
    const newUrl = this._docService.getDocumentUrl(selected);
    this._browserService.open(openType, newUrl);
  }
}
