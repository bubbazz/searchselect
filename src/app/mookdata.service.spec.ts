import { TestBed } from '@angular/core/testing';

import { MookDataService } from './mookdata.service';

describe('GetDatasService', () => {
  let service: MookDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MookDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
