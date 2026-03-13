import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDescriptionComponent } from './display-description.component';

describe('DisplayDescriptionComponent', () => {
  let component: DisplayDescriptionComponent;
  let fixture: ComponentFixture<DisplayDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
