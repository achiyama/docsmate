import { HostnameDocument } from "~domains/documents/hostname-document";
import { RegexDocument } from "~domains/documents/regex-document";
import { RegexRule } from "~domains/documents/rules/regex-rule";
import { Hostname } from "~domains/documents/urls/hostname";

import { DocumentBase } from "../domains/documents/document";
import { languages } from "./languages";

export const documents: DocumentBase[] = [
  new RegexDocument("Microsoft Learn", new Hostname("learn.microsoft.com"), [
    new RegexRule(languages[0], '(?<=learn.microsoft.com/).+?(?=\/)', "en-us"),
    new RegexRule(languages[1], '(?<=learn.microsoft.com/).+?(?=\/)', "ja-jp"),
    new RegexRule(languages[2], '(?<=learn.microsoft.com/).+?(?=\/)', "zh-cn"),
    new RegexRule(languages[3], '(?<=learn.microsoft.com/).+?(?=\/)', "zh-tw"),
    new RegexRule(languages[4], '(?<=learn.microsoft.com/).+?(?=\/)', "ko-kr"),
    new RegexRule(languages[5], '(?<=learn.microsoft.com/).+?(?=\/)', "fr-fr"),
  ]),
  // new HostnameDocument('')
  // new HostnameDocument("Angular", new Hostname("angular.io"))
];
