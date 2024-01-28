import { TestBed } from '@angular/core/testing';

import { DSValuesService } from './dsvalues-.service';

describe('DSValuesService', () => {
  let service: DSValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DSValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
