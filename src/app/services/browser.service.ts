import { Injectable } from '@angular/core';
import { DocumentUrl } from '../models/document-url';

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

  open(openType: 'CurrentTab' | 'NewTab' | 'NewWindow', url: DocumentUrl) {
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
