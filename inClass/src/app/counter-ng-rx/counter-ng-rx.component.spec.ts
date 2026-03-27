import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNgRxComponent } from './counter-ng-rx.component';

describe('CounterNgRxComponent', () => {
  let component: CounterNgRxComponent;
  let fixture: ComponentFixture<CounterNgRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterNgRxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterNgRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
