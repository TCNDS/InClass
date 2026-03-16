import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpIntro } from './http-intro';

describe('HttpIntro', () => {
  let component: HttpIntro;
  let fixture: ComponentFixture<HttpIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpIntro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpIntro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
