import { TestBed } from '@angular/core/testing';

import { RETypesService } from './retypes-.service';

describe('RETypesService', () => {
  let service: RETypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RETypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
