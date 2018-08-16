import { TestBed, inject } from '@angular/core/testing';

import { SpreadGridService } from './spread-grid.service';

describe('SpreadGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpreadGridService]
    });
  });

  it('should be created', inject([SpreadGridService], (service: SpreadGridService) => {
    expect(service).toBeTruthy();
  }));
});
