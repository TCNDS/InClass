import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { RoutingIntro } from './routing-intro';

describe('RoutingIntro', () => {
  let component: RoutingIntro;
  let fixture: ComponentFixture<RoutingIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingIntro],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
            data: of({ data: { user: 'Miranda' } }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutingIntro);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
