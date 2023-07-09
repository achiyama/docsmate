import DocumentURL from "./document-url"
import { LocalizedDocument } from "./localized-document.model"

/**
 * ローカライズドキュメント(正規表現)
 */
export class LocalizedRegexDocument extends LocalizedDocument {
  constructor(
    name: string,
    hostName: string,
    regex: string,
    replacementString: string
  ) {
    super(name, hostName)
    this.regex = regex
    this.replacementString = replacementString
  }

  /**
   * 正規表現
   */
  regex: string

  /**
   * 置換文字列
   */
  replacementString: string

  convertUrl(currentUrl: DocumentURL): DocumentURL {
    return new DocumentURL(
      currentUrl.href.replace(new RegExp(this.regex), this.replacementString)
    )
  }
}
