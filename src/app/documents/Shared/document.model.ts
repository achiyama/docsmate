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
  private _localizedDocuments: LocalizedDocument[];

  constructor(
    name: string,
    hostName: string,
    localizedDocuments: LocalizedDocument[]
  ) {
    this._name = name;
    this._hostName = hostName;
    this._localizedDocuments = localizedDocuments;
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

  public get localizedDocuments(): LocalizedDocument[] {
    return this._localizedDocuments;
  }

  public set localizedDocuments(value: LocalizedDocument[]) {
    this._localizedDocuments = value;
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
