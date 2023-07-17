/**
 * ホスト名
 */
export class Hostname {
  private _value: string;

  constructor(value: string) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  isSame(url: string | URL) {
    return new URL(url).hostname === this._value;
  }
}
