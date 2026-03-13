import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display-description',
  standalone: false,
  templateUrl: './display-description.component.html',
  styleUrl: './display-description.component.scss'
})
export class DisplayDescriptionComponent {
  @Input()
  msg: any;
  @Output() 
  saveClicked = new EventEmitter<void>();
  onSave(){
    this.saveClicked.emit();
  }
}
