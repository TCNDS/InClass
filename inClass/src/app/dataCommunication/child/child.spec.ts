import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Child } from './child';

describe('Child', () => {
  let component: Child;
  let fixture: ComponentFixture<Child>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Child],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Child);
    component = fixture.componentInstance;
    component.fromParent = 'test';
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
