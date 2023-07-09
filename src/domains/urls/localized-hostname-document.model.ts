import DocumentURL from "./document-url"
import { LocalizedDocument } from "./localized-document.model"

/**
 * ローカライズドキュメント(ホスト名切替)
 */
export class LocalizedHostnameDocument extends LocalizedDocument {
  constructor(name: string, hostName: string) {
    super(name, hostName)
  }

  convertUrl(url: DocumentURL): DocumentURL {
    url.hostname = this.hostName
    return new DocumentURL(url.href)
  }
}
