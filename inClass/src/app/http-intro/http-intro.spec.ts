import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { HttpIntro } from './http-intro';

describe('HttpIntro', () => {
  let component: HttpIntro;
  let fixture: ComponentFixture<HttpIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpIntro],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(HttpIntro);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
