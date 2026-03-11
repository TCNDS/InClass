import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  standalone: false,
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss'
})
export class DirectiveComponent {
  title = 'inClass';
  isShow = 123;
  emptyArr = [1, 2, 3, 4];
  infoArr = [
    {name: "Shawn", phone: "123-456"},
    {name: "Bob", phone: "345-678"},
    {name: "Alice", phone: "234-567"},
    {name: "Candy", phone: "456-789"}
  ];
  textColor = 'purple';
}
