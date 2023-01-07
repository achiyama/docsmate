import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageInputComponent } from './form/language-input/language-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { ChangeButtonComponent } from './form/change-button/change-button.component';
import { MatButtonModule } from '@angular/material/button';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

@NgModule({
  declarations: [AppComponent, LanguageInputComponent, ChangeButtonComponent, LanguageSelectorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
