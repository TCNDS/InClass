import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: false,
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  newDate = new Date();

  str = "AbCdEgadsdsdas";
  myPhone = "5123-1313-134";
  ngOnInit(): void{
    console.log(this.newDate)
  }
}
