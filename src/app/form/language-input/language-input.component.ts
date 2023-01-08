import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { Language } from 'src/app/interfaces/language';

@Component({
  selector: 'app-language-input',
  templateUrl: './language-input.component.html',
  styleUrls: ['./language-input.component.scss'],
})
export class LanguageInputComponent implements OnInit {
  /**
   * ラベル名
   */
  @Input() labelName!: string;

  /**
   * 言語一覧
   */
  @Input() languages: Language[] = [];

  /**
   * 親コンポーネントにフォームをemitするための@output
   */
  @Output() formReady = new EventEmitter<AbstractControl>();

  /**
   * フォーム
   */
  form = new FormControl<Language>(this.languages[0], [Validators.required]);

  ngOnInit(): void {
    this.formReady.emit(this.form);
  }
}
