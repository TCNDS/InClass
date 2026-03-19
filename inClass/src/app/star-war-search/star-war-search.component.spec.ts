import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarSearchComponent } from './star-war-search.component';

describe('StarWarSearchComponent', () => {
  let component: StarWarSearchComponent;
  let fixture: ComponentFixture<StarWarSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarWarSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarWarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
