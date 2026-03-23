import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: false,
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {
  @Input() title: string = '';
  active: boolean = false;
}
