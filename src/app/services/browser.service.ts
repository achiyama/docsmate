import { Injectable } from '@angular/core';
import { DocumentURL } from '../documents/shared/document-url';

@Injectable({
  providedIn: 'root',
})
export class BrowserService {
  constructor() {}

  /**
   * 現在のページのURLを取得する
   * @returns 現在のページのURL
   */
  async getCurrentUrl() {
    return (
      await chrome.tabs.query({
        lastFocusedWindow: true,
        active: true,
      })
    )[0].url;
  }

  /**
   * 新しいページを開く
   * @param openType
   * @param url
   */
  open(openType: 'CurrentTab' | 'NewTab' | 'NewWindow', url: DocumentURL) {
    switch (openType) {
      case 'CurrentTab':
        chrome.tabs.update({ url: url.toString() });
        break;
      case 'NewTab':
        chrome.tabs.create({ url: url.toString() });
        break;
      case 'NewWindow':
        chrome.windows.create({ url: url.toString() });
        break;
      default:
        break;
    }
  }
}
