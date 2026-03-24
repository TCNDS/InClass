import { TestBed } from '@angular/core/testing';

import { JobBoardServerService } from './job-board-server.service';

describe('JobBoardServerService', () => {
  let service: JobBoardServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobBoardServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
