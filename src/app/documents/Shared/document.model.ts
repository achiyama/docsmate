import { LocalizedDocument } from 'src/app/documents/shared/localized-document.model';

/**
 * ドキュメントモデル
 */
export class Document {
  /**
   * ドキュメント名
   */
  private _name: string;

  /**
   * ホスト名
   */
  private _hostName: string;

  /**
   * ローカライズドキュメント
   */
  private _languages: LocalizedDocument[];

  constructor(name: string, hostName: string, languages: LocalizedDocument[]) {
    this._name = name;
    this._hostName = hostName;
    this._languages = languages;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get hostName(): string {
    return this._hostName;
  }

  public set hostName(value: string) {
    this._hostName = value;
  }

  public get languages(): LocalizedDocument[] {
    return this._languages;
  }

  public set languages(value: LocalizedDocument[]) {
    this._languages = value;
  }

  /**
   * 同一のホスト名かどうかを返す
   * @param hostName ホスト名
   * @returns
   */
  isSameHost(hostName: string): boolean {
    return this._hostName == hostName;
  }
}
