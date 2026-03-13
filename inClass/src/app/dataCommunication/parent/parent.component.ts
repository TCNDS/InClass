import { Component } from '@angular/core';
import { TransferDataService } from '../transfer-data.service';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  msg = "Hello From Parent";
  msgFromChild = '';
  
  receiveMessage(msg: string){
    console.log(msg)
  }

  //Dependency Injection
  constructor(private dataSevrice: TransferDataService){
  }
}
