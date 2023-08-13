import { documents } from "~configs/documents";

import type { DocumentBase } from "./document";

/**
 * ドキュメント一覧
 */
export class Documents {
  private _documents: DocumentBase[];

  constructor() {
    // 設定ファイルからドキュメントを生成する
    this._documents = documents;
  }

  /**
   * URLからドキュメントを取得する
   * @param url
   * @returns
   */
  getByUrl(url: URL) {
    console.warn(url);
    const document = this._documents.find((document) => document.isSame(url));
    return document;
  }

  /**
   * 言語切替ドキュメントの対象かどうか
   * @param url
   * @returns
   */
  isValid(url: URL) {
    return this._documents.some((document) => document.isSame(url));
  }
}
