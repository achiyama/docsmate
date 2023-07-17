import type { Hostname } from "./hostname";

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
  private _hostName: Hostname;

  constructor(name: string, hostName: Hostname) {
    this._name = name;
    this._hostName = hostName;
  }

  /**
   * 言語を切り替える
   */
  abstract translate(): void;
}
