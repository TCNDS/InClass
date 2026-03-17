import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponent } from '../my-first-component/my-first-component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // localhost: 4200/products
  // {path: '', component: ProductList},
  // // localhost: 4200/products/123
  //   {path: '/123', component: ProductDetail},
   {path:'first', component: MyFirstComponent},
];

@NgModule({
  declarations: [MyFirstComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[MyFirstComponent],
  providers:[]
})
export class MyFirstModule { }
