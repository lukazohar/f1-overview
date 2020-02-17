/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SeasonsService } from './seasons.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ISeason } from 'src/app/models';

describe('Service: Seasons', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SeasonsService], imports: [HttpClientTestingModule] });
  });

  it('should create service', inject([SeasonsService], (service: SeasonsService) => {
    expect(service).toBeTruthy();
  }));
});
