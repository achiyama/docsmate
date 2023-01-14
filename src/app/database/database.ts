import { Document } from '../documents/shared/document.model';
import { LocalizedRegexDocument } from "../documents/shared/localized-regex-document.model";
import { LocalizedHostnameDocument } from "../documents/shared/localized-hostname-document.model";

export const documents: Document[] = [
  new Document('Microsoft Learn', 'learn.microsoft.com', [
    new LocalizedRegexDocument('English (United States)', 'learn.microsoft.com', '(?<=learn.microsoft.com/).+?(?=\/)', 'en-us'),
    new LocalizedRegexDocument('日本語', 'learn.microsoft.com', '(?<=learn.microsoft.com/).+?(?=\/)', 'ja-jp'),
    new LocalizedRegexDocument('中文 (简体)', 'learn.microsoft.com', '(?<=learn.microsoft.com/).+?(?=\/)', 'zh-cn'),
    new LocalizedRegexDocument('中文 (繁體)', 'learn.microsoft.com', '(?<=learn.microsoft.com/).+?(?=\/)', 'zh-tw'),
    new LocalizedRegexDocument('한국어', 'learn.microsoft.com', '(?<=learn.microsoft.com/).+?(?=\/)', 'ko-kr'),
    new LocalizedRegexDocument('Français', 'learn.microsoft.com', '(?<=learn.microsoft.com/).+?(?=\/)', 'fr-fr'),
  ]),
  new Document('Angular', 'angular.io', [
    new LocalizedHostnameDocument('English', 'angular.io'),
    new LocalizedHostnameDocument('日本語', 'angular.jp'),
    new LocalizedHostnameDocument('한국어', 'angular.kr'),
    new LocalizedHostnameDocument('简体中文', 'angular.cn'),
    new LocalizedHostnameDocument('正體中文', 'angular.tw'),
    new LocalizedHostnameDocument('Español', 'docs.angular.lat'),
    new LocalizedHostnameDocument('Ελληνικά', 'angular-gr.web.app')
  ])
];
