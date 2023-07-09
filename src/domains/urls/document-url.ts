import type { LocalizedDocument } from "./localized-document.model"

export class DocumentURL extends URL {
  /**
   * 同一ホストかどうか
   * @param hostName
   * @returns
   */
  isSameHost(hostName: string) {
    return this.hostname == hostName
  }

  /**
   * 指定された言語にURLを変換する
   * @param url
   */
  convertUrl(document: LocalizedDocument) {
    return document.convertUrl(this)
  }
}

export default DocumentURL
