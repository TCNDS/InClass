import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from './app';
import { MyFirstComponent } from './my-first-component/my-first-component';
import { DirectivesIntro } from './directives-intro/directives-intro';
import { FormsIntroComponent } from './forms-intro-component/forms-intro-component';

//  Define the routes of the application
const routes: Routes = [
  {path:'home', component: App},
  {path:'form-intro', component: FormsIntroComponent},
 {path: '**', component: DirectivesIntro},
  // localhost: 4200/products
  // {path:'products', loadChildren()}
];

@NgModule({
  // forRoot / forChild
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
