import { Injectable } from '@angular/core';
import { Doc } from '../interfaces/doc';
import { Language } from '../interfaces/language';
import { DocumentUrl } from '../models/document-url';
import { BrowserService } from './browser.service';

@Injectable({
  providedIn: 'root',
})
export class DocumentationService {
  /**
   * 現在のページのURL
   */
  currentUrl: DocumentUrl | undefined;

  /**
   * 現在開いているページのドキュメント
   */
  currentDoc: Doc | undefined;

  docs: Doc[] = [
    {
      name: 'Microsoft Learn',
      hostName: 'learn.microsoft.com',
      // prettier-ignore
      regex: '(?<=learn.microsoft.com/).+?(?=\/)',
      languages: [
        {
          id: 1,
          name: '日本語',
          path: 'ja-jp',
        },
        {
          id: 2,
          name: 'English (United States)',
          path: 'en-us',
        },
      ],
    },
  ];

  constructor(private urlService: BrowserService) {}

  /**
   * 対応言語を返す
   */
  get supportedLanguages() {
    return this.currentDoc ? this.currentDoc.languages : [];
  }

  /**
   * 検索する
   * @returns
   */
  async search() {
    const url = await this.urlService.getCurrentUrl();
    if (!url) return;
    this.currentUrl = new DocumentUrl(url);
    this.currentDoc = this.docs.find((doc) =>
      this.currentUrl!.isSameHost(doc.hostName)
    );
  }

  /**
   * 言語に対応するドキュメントのURLを取得する
   * @param language 言語
   */
  getDocumentUrl(language: Language) {
    return new DocumentUrl(
      this.currentUrl
        ?.toString()
        .replace(new RegExp(this.currentDoc!.regex), language!.path)!
    );
    // chrome.tabs.update({ url: newUrl });
  }
}