import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { PipeIntro } from './pipe-intro';
import { MyFirstPipe } from './my-first-pipe';
import { TransferData } from '../dataCommunication/transfer-data';

describe('PipeIntro', () => {
  let component: PipeIntro;
  let fixture: ComponentFixture<PipeIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipeIntro, MyFirstPipe],
      imports: [CommonModule],
      providers: [TransferData],
    }).compileComponents();

    fixture = TestBed.createComponent(PipeIntro);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
