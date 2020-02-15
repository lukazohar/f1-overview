/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SeasonsService } from './seasons.service';

describe('Service: Seasons', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeasonsService]
    });
  });

  it('should ...', inject([SeasonsService], (service: SeasonsService) => {
    expect(service).toBeTruthy();
  }));
});
