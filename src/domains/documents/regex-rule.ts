import type { Language } from "~domains/languages/language";

import type { RuleBase } from "./rule-base";

/**
 * 正規表現置き換えルール
 */
export class RegexRule implements RuleBase {
  private readonly _language: Language;
  private readonly _regex: string;
  private readonly _replacement: string;

  constructor(language: Language, regex: string, replacement: string) {
    this._language = language;
    this._regex = regex;
    this._replacement = replacement;
  }

  get language(): Language {
    return this._language;
  }

  isSame(language: Language) {
    return this._language === language;
  }
}
