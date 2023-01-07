import { Component, Input } from '@angular/core';

interface Language {
  key: number;
  value: string;
}

@Component({
  selector: 'app-language-input',
  templateUrl: './language-input.component.html',
  styleUrls: ['./language-input.component.scss'],
})
export class LanguageInputComponent {
  @Input() labelName!: string;

  languages: Language[] = [
    { key: 0, value: '日本語' },
    { key: 1, value: 'English-US' },
  ];
}
