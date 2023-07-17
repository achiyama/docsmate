import type { Hostname } from "./urls/hostname";

/**
 * ドキュメント
 */
export abstract class Document {
  /**
   * ドキュメント名
   */
  private _name: string;

  /**
   * ドキュメントホスト名
   */
  private _hostname: Hostname;

  constructor(name: string, hostname: Hostname) {
    this._name = name;
    this._hostname = hostname;
  }

  /**
   * 言語を切り替える
   */
  abstract translate(): void;
}
