import { DocumentBase } from "./document";

export class HostnameDocument extends DocumentBase {
  translate(): void {
    throw new Error("Method not implemented.");
  }

  isSame(url: URL): boolean {
    throw new Error("Method not implemented.");
  }
}
