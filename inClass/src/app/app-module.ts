import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyFirstModule } from './my-first-module/my-first-module';
import { DirectivesIntro } from './directives-intro/directives-intro';
import { Highlight } from './directives-intro/highlight';

@NgModule({
  declarations: [
    App,
    DirectivesIntro,
    Highlight,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MyFirstModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
