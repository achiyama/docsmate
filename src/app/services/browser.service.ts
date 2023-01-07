import { Injectable } from '@angular/core';

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
}
