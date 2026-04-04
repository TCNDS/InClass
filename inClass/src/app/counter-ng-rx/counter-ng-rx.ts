import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from './Store/action';
import { selectCount } from './Store/selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-ng-rx',
  standalone: false,
  templateUrl: './counter-ng-rx.html',
  styleUrl: './counter-ng-rx.scss',
})
export class CounterNgRx {
  counter: Observable<number>;
  constructor(private store: Store<{ counter: { count: number } }>) {
    this.counter = this.store.select(selectCount);
  }

  onIncrement() {
    this.store.dispatch(increment());
  }
}
