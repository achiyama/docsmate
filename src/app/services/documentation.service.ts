import { Injectable } from '@angular/core';
import { Doc } from './doc';

@Injectable({
  providedIn: 'root',
})
export class DocumentationService {
  currentUrl: URL | undefined;

  docs: Doc[] = [
    {
      name: 'Microsoft Learn',
      hostName: 'learn.microsoft.com',
      languages: [
        {
          name: '日本語',
          path: 'ja-jp',
        },
        {
          name: 'English (United States)',
          path: 'en-us',
        },
      ],
    },
  ];

  constructor() {}

  async search() {
    const url = (
      await chrome.tabs.query({
        lastFocusedWindow: true,
        active: true,
      })
    )[0].url;

    if (url) {
      this.currentUrl = new URL(url);
    } else {
      return;
    }
  }
}
