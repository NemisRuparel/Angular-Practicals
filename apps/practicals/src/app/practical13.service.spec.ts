import { TestBed } from '@angular/core/testing';

import { Practical13Service } from './practical13.service';

describe('Practical13Service', () => {
  let service: Practical13Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Practical13Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
