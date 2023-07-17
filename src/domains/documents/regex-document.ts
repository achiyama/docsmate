import { Document } from "./document";
import type { Hostname } from "./urls/hostname";

export class RegexDocument extends Document {
  /**
   * 正規表現
   */
  private _regex: string;

  constructor(name: string, hostname: Hostname, regex: string) {
    super(name, hostname);
    this._regex = regex;
  }

  translate(): void {
    throw new Error("Method not implemented.");
  }
}
