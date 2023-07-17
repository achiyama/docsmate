import type { Language } from "~domains/languages/language";

/**
 * 正規表現置き換えルール
 */
export class RegexRule {
  private _language: Language;
  private _regex: string;
  private _replacement: string;

  constructor(language: Language, regex: string, replacement: string) {
    this._language = language;
    this._regex = regex;
    this._replacement = replacement;
  }

  isSameLanguage(language: Language) {
    return this._language === language;
  }
}
