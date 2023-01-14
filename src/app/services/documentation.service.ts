import { Injectable } from '@angular/core';
import { documents } from '../database/database';
import { Document } from '../documents/shared/document.model';
import { LocalizedDocument } from '../documents/shared/localized-document.model';
import { DocumentURL } from '../documents/shared/document-url';
import { BrowserService } from './browser.service';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  /**
   * 現在のページのURL
   */
  currentUrl: DocumentURL | undefined;

  /**
   * 現在開いているドキュメント
   */
  currentDocument: Document | undefined;

  /**
   * 現在開いているローカライズドキュメント
   */
  currentLocalizedDocument: LocalizedDocument | undefined;

  constructor(private _browserService: BrowserService) {}

  /**
   * ローカライズ対応言語を返す
   */
  get supportedLocalizedDocuments() {
    return this.currentDocument ? this.currentDocument.localizedDocuments : [];
  }

  /**
   * 検索する
   * @returns
   */
  async search() {
    const url = await this._browserService.getCurrentUrl();
    if (!url) {
      this._resetDocument();
      return;
    }
    this.currentUrl = new DocumentURL(url);

    const localized = documents
      .flatMap((document, index) =>
        document.localizedDocuments.map((localizedDocument) => ({
          documentIndex: index,
          localizedDocument,
        }))
      )
      .find((flatDocument) => {
        return this.currentUrl?.isSameHost(
          flatDocument.localizedDocument.hostName
        );
      });

    if (!localized) {
      this._resetDocument();
      return;
    }

    this.currentDocument = documents[localized?.documentIndex!];
    this.currentLocalizedDocument = localized?.localizedDocument;
  }

  /**
   * 言語に対応するドキュメントのURLを取得する
   * @param language 言語
   */
  getDocumentUrl(document: LocalizedDocument) {
    if (!this.currentUrl) return;
    return this.currentUrl.convertUrl(document);
  }

  /**
   * 現在のドキュメントをリセットする
   */
  private _resetDocument() {
    this.currentUrl = undefined;
    this.currentDocument = undefined;
    this.currentLocalizedDocument = undefined;
  }
}
