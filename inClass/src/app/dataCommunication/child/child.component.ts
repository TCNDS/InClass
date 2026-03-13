import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input()
  message!: string;
  
  @Output()
  messageEvent = new EventEmitter();
  sendMessage(){
    this.messageEvent.emit("Hello from chid!")
  }
}
