import { documents } from "~configs/documents";

import type { DocumentBase } from "./document";

/**
 * ドキュメント一覧
 */
export class Documents {
  private _documents: DocumentBase[];

  constructor() {
    this._documents = documents;
  }

  /**
   * URLからドキュメントを取得する
   * @param url
   * @returns
   */
  getByUrl(url: URL): DocumentBase {
    const document = this._documents.find((document) => document.isSame(url));
    if (!document) throw new Error("ドキュメントが見つかりませんでした。");
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
