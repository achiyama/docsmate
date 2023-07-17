import { HostnameDocument } from "~domains/documents/hostname-document";
import { RegexDocument } from "~domains/documents/regex-document";
import { Hostname } from "~domains/documents/urls/hostname";

import { Document } from "../domains/documents/document";

export const documents: Document[] = [
  new RegexDocument(
    "Microsoft Learn",
    new Hostname("learn.microsoft.com"),
    "(?<=learn.microsoft.com/).+?(?=/)"
  ),
  new HostnameDocument("Angular", new Hostname("angular.io"))
];
