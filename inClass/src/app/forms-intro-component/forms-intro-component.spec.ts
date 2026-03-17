import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsIntroComponent } from './forms-intro-component';

describe('FormsIntroComponent', () => {
  let component: FormsIntroComponent;
  let fixture: ComponentFixture<FormsIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsIntroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
