import type { Language } from "~domains/languages/language";

import type { RuleBase } from "./rule-base";
import type { Hostname } from "./urls/hostname";

export class HostnameRule implements RuleBase {
  /**
   * ホスト名
   */
  private _hostname: Hostname;

  /**
   * 言語
   */
  private _language: Language;

  constructor(hostname: Hostname, language: Language) {
    this._hostname = hostname;
    this._language = language;
  }

  get language(): Language {
    return this._language;
  }

  isSame(language: Language): boolean {
    return this._language === language;
  }

  get hostname(): Hostname {
    return this._hostname;
  }
}
