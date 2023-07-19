import type { Language } from "../languages/language";
import { DocumentBase } from "./document";
import type { RegexRule } from "./regex-rule";
import type { Hostname } from "./urls/hostname";

/**
 * 正規表現ドキュメント
 */
export class RegexDocument extends DocumentBase {
  /**
   * 正規表現ルール
   */
  private _rules: RegexRule[];

  /**
   * ホスト名
   */
  private _hostname: Hostname;

  constructor(name: string, hostname: Hostname, rules: RegexRule[]) {
    super(name);
    this._hostname = hostname;
    this._rules = rules;
  }

  translate(language: Language): void {
    // const rule = this._rules.find((rule) => rule.isSameLanguage(language));
    // if (!rule) throw new Error("正規表現ルールが見つかりませんでした。");
  }

  isSame(url: URL): boolean {
    return url.hostname === this._hostname.value;
  }
}
