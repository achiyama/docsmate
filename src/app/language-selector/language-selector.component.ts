import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentationService } from '../services/documentation.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  tab: chrome.tabs.Tab | undefined;

  constructor(private docService: DocumentationService) {}

  async ngOnInit() {
    await this.docService.search();
  }
}
