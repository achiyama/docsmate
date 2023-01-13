export class DocumentURL extends URL {
  isSameHost(hostName: string) {
    return (this.hostname = hostName);
  }
}
