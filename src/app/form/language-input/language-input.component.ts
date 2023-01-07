import { Component, Input } from '@angular/core';
import { Language } from 'src/app/interfaces/language';

@Component({
  selector: 'app-language-input',
  templateUrl: './language-input.component.html',
  styleUrls: ['./language-input.component.scss'],
})
export class LanguageInputComponent {
  @Input() labelName!: string;
  @Input() languages!: Language[];
}
