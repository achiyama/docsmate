import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageInputComponent } from './languages/shared/language-input/language-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { LanguageSelectorComponent } from './languages/shared/language-selector/language-selector.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    LanguageInputComponent,
    LanguageSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    // StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
