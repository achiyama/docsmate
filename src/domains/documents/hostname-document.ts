import { DocumentBase } from "./document";
import type { HostnameRule } from "./rules/hostname-rule";

/**
 * ホスト名ドキュメント
 */
export class HostnameDocument extends DocumentBase {
  /**
   * ホスト名ルール
   */
  private _rules: HostnameRule[];

  constructor(name: string, rules: HostnameRule[]) {
    super(name);
    this._rules = rules;
  }

  translate(): void {
    throw new Error("Method not implemented.");
  }

  isSame(url: URL): boolean {
    return this._rules.some((rule) => rule.hostname.value === url.hostname);
  }
}
