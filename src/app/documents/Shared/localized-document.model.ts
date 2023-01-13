/**
 * ローカライズドキュメント
 */
export class LocalizedDocument {
  /**
   * 言語名
   */
  name: string;

  /**
   * ホスト名
   */
  hostName: string;

  /**
   * 正規表現
   */
  regex: string;

  /**
   * 置換文字列
   */
  replacementString: string;

  /**
   * コンストラクタ
   * @param name 言語名
   * @param hostName ホスト名
   * @param regex 正規表現
   * @param replacementText 置換文字列
   */
  constructor(
    name: string,
    hostName: string,
    regex: string,
    replacementString: string
  ) {
    this.name = name;
    this.hostName = hostName;
    this.regex = regex;
    this.replacementString = replacementString;
  }
}
