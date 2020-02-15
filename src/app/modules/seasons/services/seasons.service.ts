import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISportsRadarResponse, ISeason } from '../../../models/index';
import { SportsRadarEnvironment } from 'src/environments/sportsRadarEnvironment';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {
  constructor(private httpClient: HttpClient) {}

  getSeasons(): Observable<ISeason[]> {
    return of([
      {
        id: 'sr:stage:547803',
        description: 'Formula 1 2020',
        scheduled: new Date('2020-03-13T01:00:00+00:00'),
        scheduled_end: new Date('2020-11-29T15:10:00+00:00'),
        type: 'season',
        single_event: false
      },
      {
        id: 'sr:stage:426678',
        description: 'Formula 1 2019',
        scheduled: new Date('2019-03-15T01:00:00+00:00'),
        scheduled_end: new Date('2019-12-01T18:10:00+00:00'),
        type: 'season',
        single_event: false
      }
    ]);
    /* return this.httpClient
      .get<ISportsRadarResponse>(SportsRadarEnvironment.prefix + 'seasons.json' + SportsRadarEnvironment.api_key_prefix)
      .pipe(map((res: ISportsRadarResponse) => res.stages)); */
  }
}
