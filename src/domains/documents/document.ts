import { Language } from "../languages/language";
import type { Hostname } from "./urls/hostname";

/**
 * ドキュメント基盤
 */
export abstract class DocumentBase {
  /**
   * ドキュメント名
   */
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  /**
   * 言語を切り替える
   */
  abstract translate(language: Language): void;

  abstract isSame(url: URL): boolean;
}
