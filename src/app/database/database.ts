import { LocalizedDocument } from "../documents/shared/localized-document.model";
import { Document } from '../documents/shared/document.model';

export const documents: Document[] = [
  new Document('Microsoft Learn', 'learn.microsoft.com', [
    new LocalizedDocument('English (United States)', 'learn.microsoft.com', '(?<=learn.microsoft.com/).+?(?=\/)', 'en-us'),
    new LocalizedDocument('日本語', 'learn.microsoft.com', '(?<=learn.microsoft.com/).+?(?=\/)', 'ja-jp'),
])];
