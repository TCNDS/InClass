import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SubjectIntro } from './subject-intro';
import { ShareDataService } from './share-data-service';

describe('SubjectIntro', () => {
  let component: SubjectIntro;
  let fixture: ComponentFixture<SubjectIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectIntro],
      imports: [ReactiveFormsModule],
      providers: [ShareDataService],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectIntro);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
