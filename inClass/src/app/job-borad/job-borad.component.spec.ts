import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBoradComponent } from './job-borad.component';

describe('JobBoradComponent', () => {
  let component: JobBoradComponent;
  let fixture: ComponentFixture<JobBoradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobBoradComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobBoradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
