import { TestBed } from '@angular/core/testing';

import { StarWarApiService } from './star-war-api.service';

describe('StarWarApiService', () => {
  let service: StarWarApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
