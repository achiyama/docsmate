import { DocumentURL } from "./document-url"

/**
 * ローカライズドキュメント
 */
export abstract class LocalizedDocument {
  /**
   * 言語名
   */
  name: string

  /**
   * ホスト名
   */
  hostName: string

  /**
   * コンストラクタ
   * @param name 言語名
   * @param hostName ホスト名
   */
  constructor(name: string, hostName: string) {
    this.name = name
    this.hostName = hostName
  }

  /**
   * URLを変換する
   */
  abstract convertUrl(url: DocumentURL): DocumentURL
}
