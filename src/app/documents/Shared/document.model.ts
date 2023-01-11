import { Language } from 'src/app/languages/shared/language.model';
import { Entity } from 'src/app/shared/entity.base';

/**
 * ドキュメントモデル
 */
export class Document extends Entity {
  /**
   * ドキュメント名
   */
  private _name: string;

  /**
   * ホスト名
   */
  private _hostName: string;

  /**
   * 対応言語
   */
  private _languages: Language[];

  constructor(
    id: number,
    name: string,
    hostName: string,
    languages: Language[]
  ) {
    super(id);
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

  public get languages(): Language[] {
    return this._languages;
  }

  public set languages(value: Language[]) {
    this._languages = value;
  }
}
