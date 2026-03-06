import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//  Define the routes of the application
const routes: Routes = [];

@NgModule({
  // forRoot / forChild
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
