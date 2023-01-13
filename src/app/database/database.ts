import { LocalizedDocument } from "../documents/shared/localized-document.model";
import { Document } from '../documents/shared/document.model';

export const documents: Document[] = [
  new Document('Microsoft Learn', 'learn.microsoft.com', [
    new LocalizedDocument('English (United States)', 'learn.microsoft.com', '(?<=learn.microsoft.com/).+?(?=\/)', 'en-us'),
    new LocalizedDocument('日本語', 'learn.microsoft.com', '(?<=learn.microsoft.com/).+?(?=\/)', 'ja-jp')]),
  new Document('Angular', 'angular.io', [
    new LocalizedDocument('English', 'angular.io', '(?<=angular.).+?(?=\/)', 'io'),
    new LocalizedDocument('日本語', 'angular.jp', '(?<=angular.).+?(?=\/)', 'jp'),
    new LocalizedDocument('한국어', 'angular.kr', '(?<=angular.).+?(?=\/)', 'kr'),
    new LocalizedDocument('简体中文', 'angular.cn', '(?<=angular.).+?(?=\/)', 'cn'),
    new LocalizedDocument('正體中文', 'angular.tw', '(?<=angular.).+?(?=\/)', 'tw'),
  ])
];
