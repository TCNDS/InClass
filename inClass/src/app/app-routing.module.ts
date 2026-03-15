import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

// Define the routes of the application
const routes: Routes = [
  {path:'home', component: AppComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  // forRoot / forChild
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
