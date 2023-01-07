export class DocumentUrl extends URL {
  /**
   * 同一のホスト名かどうかを返す
   * @param hostName ホスト名
   * @returns
   */
  isSameHost(hostName: string): boolean {
    return this.hostname == hostName;
  }
}
