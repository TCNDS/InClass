import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsIntroComponent } from './forms-intro-component';

describe('FormsIntroComponent', () => {
  let component: FormsIntroComponent;
  let fixture: ComponentFixture<FormsIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsIntroComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
