import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { LocalizedDocument } from 'src/app/documents/shared/localized-document.model';
import { BrowserService } from '../../../services/browser.service';
import { DocumentService } from '../../../services/documentation.service';

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
  isValidDocument: boolean = false;
  /**
   * 対応言語ドキュメント
   */
  supportedLocalizedDocuments: LocalizedDocument[] = [];

  constructor(
    private _documentService: DocumentService,
    private _browserService: BrowserService
  ) {}

  async ngOnInit() {
    await this._documentService.search();
    this.isValidDocument = !!this._documentService.currentLocalizedDocument;
    this.supportedLocalizedDocuments =
      this._documentService.supportedLocalizedDocuments;
  }

  formInitialized(name: string, form: AbstractControl) {
    this.formGroup.setControl(name, form);
  }

  /**
   * 言語を変更する
   * @param openType 開き方
   */
  onSwitch(openType: 'CurrentTab' | 'NewTab' | 'NewWindow') {
    const selected = this.formGroup.get('localizedDocument')
      ?.value as LocalizedDocument;
    const newUrl = this._documentService.getDocumentUrl(selected);
    this._browserService.open(openType, newUrl!);
  }
}
