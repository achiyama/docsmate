import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { LocalizedDocument } from 'src/app/documents/shared/localized-document.model';

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
   * 対応言語ドキュメント
   */
  @Input() supportedLocalizedDocuments: LocalizedDocument[] = [];

  /**
   * 親コンポーネントにフォームをemitするための@output
   */
  @Output() formReady = new EventEmitter<AbstractControl>();

  /**
   * フォーム
   */
  form: FormControl<LocalizedDocument>;

  constructor() {
    this.form = new FormControl<LocalizedDocument>(
      this.supportedLocalizedDocuments[0],
      {
        nonNullable: true,
        validators: [Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.formReady.emit(this.form);
  }
}
