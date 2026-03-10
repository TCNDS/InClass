import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesIntro } from './directives-intro';

describe('DirectivesIntro', () => {
  let component: DirectivesIntro;
  let fixture: ComponentFixture<DirectivesIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectivesIntro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesIntro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
