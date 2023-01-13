import { Injectable } from '@angular/core';
import { documents } from '../database/database';
import { Document } from '../documents/shared/document.model';
import { LocalizedDocument } from '../documents/shared/localized-document.model';
import { Doc } from '../interfaces/doc';
import { Language } from '../interfaces/language';
import { DocumentURL } from '../models/document-url';
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
    if (!url) return;
    this.currentUrl = new DocumentURL(url);

    const localized = documents
      .flatMap((document, index) =>
        document.localizedDocuments.map((localizedDocument) => ({
          documentIndex: index,
          localizedDocument,
        }))
      )
      .find((flatDocument) =>
        this.currentUrl?.isSameHost(flatDocument.localizedDocument.hostName)
      );

    this.currentDocument = documents[localized?.documentIndex!];
    this.currentLocalizedDocument = localized?.localizedDocument;
  }

  /**
   * 言語に対応するドキュメントのURLを取得する
   * @param language 言語
   */
  getDocumentUrl(document: LocalizedDocument) {
    if (!this.currentUrl) return;
    return new DocumentURL(
      this.currentUrl
        .toString()
        .replace(
          new RegExp(this.currentLocalizedDocument!.regex),
          document!.replacementString
        )
    );
  }
}
