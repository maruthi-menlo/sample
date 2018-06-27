import { TestBed, inject } from '@angular/core/testing';

import { FpwdService } from './fpwd.service';

describe('FpwdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FpwdService]
    });
  });

  it('should be created', inject([FpwdService], (service: FpwdService) => {
    expect(service).toBeTruthy();
  }));
});
