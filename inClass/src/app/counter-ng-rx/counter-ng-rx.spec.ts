import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { CounterNgRx } from './counter-ng-rx';
import { counterReducer } from './Store/reducer';

describe('CounterNgRx', () => {
  let component: CounterNgRx;
  let fixture: ComponentFixture<CounterNgRx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterNgRx],
      imports: [
        StoreModule.forRoot({
          counter: counterReducer,
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterNgRx);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
