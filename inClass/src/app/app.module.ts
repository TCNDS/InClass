import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directive/highlight.directive';
import { TasklistComponent } from './tasklist/tasklist.component';
import { DirectiveComponent } from './directive/directive.component';
import { OverflowDirective } from './tasklist/overflow.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HighlightDirective,
    TasklistComponent,
    DirectiveComponent,
    OverflowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
