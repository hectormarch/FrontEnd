import { TestBed } from '@angular/core/testing';

import { ServPortfService } from './serv-portf.service';

describe('ServPortfService', () => {
  let service: ServPortfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServPortfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
