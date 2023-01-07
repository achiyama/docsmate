import { Component, OnInit } from '@angular/core';
import { Language } from '../interfaces/language';
import { DocumentationService } from '../services/documentation.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  tab: chrome.tabs.Tab | undefined;
  /**
   * 対応言語
   */
  languages: Language[] = [];

  constructor(private docService: DocumentationService) {}

  async ngOnInit() {
    await this.docService.search();
    this.languages = this.docService.supportedLanguages;
  }

  /**
   * 言語を変更する
   */
  onSwitch() {
    // 現在は日本語切り替え固定
    this.docService.switchLanguage(2);
  }
}
