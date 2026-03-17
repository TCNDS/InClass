import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponent } from '../my-first-component/my-first-component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MyFirstComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[MyFirstComponent]
})
export class MyFirstModule { }
