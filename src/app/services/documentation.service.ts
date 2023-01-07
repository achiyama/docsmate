import { Injectable } from '@angular/core';
import { Doc } from '../interfaces/doc';
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
   * 言語を変更する
   * @param id 言語ID
   */
  switchLanguage(id: number) {
    const language = this.currentDoc?.languages.find(
      (language) => language.id == id
    );

    console.warn(this.currentUrl?.toString());
    console.warn(this.currentDoc);
    console.warn(language);

    const newUrl = this.currentUrl
      ?.toString()
      .replace(new RegExp(this.currentDoc!.regex), language!.path);

    console.log(newUrl);

    // this.currentUrl = new URL(newUrl!);

    // chrome.tabs.create({
    //   url: newUrl,
    // });

    chrome.tabs.update({ url: newUrl });
  }
}
