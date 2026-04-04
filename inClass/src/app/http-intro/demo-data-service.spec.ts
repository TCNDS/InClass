import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { DemoDataService } from './demo-data-service';

describe('DemoDataService', () => {
  let service: DemoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(DemoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
