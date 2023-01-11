/**
 * 言語モデル
 */
export class Language {
  /**
   * 言語名
   */
  name: string;

  /**
   * 言語名(オリジナル)
   */
  originalName: string;

  /**
   * 置換文字列
   */
  replacementText: string;

  /**
   *
   * @param name 言語名
   * @param originalName 言語名(オリジナル)
   * @param replacementText 置換文字列
   */
  constructor(name: string, originalName: string, replacementText: string) {
    this.name = name;
    this.originalName = originalName;
    this.replacementText = replacementText;
  }
}
