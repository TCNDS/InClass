import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from './Store/action';
import { selectCount } from './Store/selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-ng-rx',
  standalone: false,
  templateUrl: './counter-ng-rx.component.html',
  styleUrl: './counter-ng-rx.component.scss'
})
export class CounterNgRxComponent {
  counter: Observable<number> ;
  constructor(private store: Store){
    this.counter = this.store.select(selectCount);
  }

  onIncrement(): void {
    this.store.dispatch(increment())
  }
}
