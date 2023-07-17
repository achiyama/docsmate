/**
 * ホスト名
 */
export class Hostname {
  private _value: string;

  constructor(value: string) {
    this._value = value;
  }

  isSame(url: string) {
    return new URL(url).hostname === this._value;
  }
}
