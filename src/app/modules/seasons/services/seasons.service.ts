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
        scheduled_end: new Date('2020-11-29T15:10:00+00:00')
      },
      {
        id: 'sr:stage:426678',
        description: 'Formula 1 2019',
        scheduled: new Date('2019-03-15T01:00:00+00:00'),
        scheduled_end: new Date('2019-12-01T18:10:00+00:00')
      }
    ]);
    /* return this.httpClient
      .get<ISportsRadarResponse>(SportsRadarEnvironment.prefix + 'seasons.json' + SportsRadarEnvironment.api_key_prefix)
      .pipe(map((res: ISportsRadarResponse) => res.stages)); */
  }

  getSeason(seasonId: string): Observable<ISeason> {
    return of({
      id: 'sr:stage:426678',
      description: 'Formula 1 2019',
      scheduled: new Date('2019-03-15T01:00:00+00:00'),
      scheduled_end: new Date('2019-12-01T18:10:00+00:00'),
      winner: {
        id: 'sr:competitor:7135',
        name: 'Hamilton, Lewis',
        nationality: 'Great Britain',
        country_code: 'GBR'
      },
      teams: [
        {
          id: 'sr:competitor:4510',
          name: 'Ferrari',
          nationality: 'Italy',
          country_code: 'ITA'
        },
        {
          id: 'sr:competitor:41127',
          name: 'Mercedes',
          nationality: 'Germany',
          country_code: 'DEU'
        },
        {
          id: 'sr:competitor:4978',
          name: 'Red Bull Racing',
          nationality: 'Austria',
          country_code: 'AUT'
        },
        {
          id: 'sr:competitor:4514',
          name: 'McLaren',
          nationality: 'Great Britain',
          country_code: 'GBR'
        },
        {
          id: 'sr:competitor:4512',
          name: 'Renault F1 Team',
          nationality: 'France',
          country_code: 'FRA'
        },
        {
          id: 'sr:competitor:5771',
          name: 'Alphatauri',
          nationality: 'Italy',
          country_code: 'ITA'
        },
        {
          id: 'sr:competitor:4515',
          name: 'Alfa Romeo Racing',
          nationality: 'Switzerland',
          country_code: 'CHE'
        },
        {
          id: 'sr:competitor:496090',
          name: 'Racing Point F1 Team',
          nationality: 'Great Britain',
          country_code: 'GBR'
        },
        {
          id: 'sr:competitor:242902',
          name: 'Haas F1 Team',
          nationality: 'USA',
          country_code: 'USA'
        },
        {
          id: 'sr:competitor:4511',
          name: 'Williams',
          nationality: 'Great Britain',
          country_code: 'GBR'
        }
      ]
    });
    /* return this.httpClient
      .get<ISportsRadarResponse>(
        SportsRadarEnvironment.prefix +
          'sport_events/' +
          seasonId +
          '/probabilities.json' +
          SportsRadarEnvironment.api_key_prefix
      )
      .pipe(
        map((res: ISportsRadarResponse) => {
          const seasonData: ISeason = {
            id: res.stage.id,
            description: res.stage.description,
            scheduled: res.stage.scheduled,
            scheduled_end: res.stage.scheduled_end,
            type: res.stage.type,
            single_event: res.stage.single_event,
            parents: [res.stage.parents],
            winner: res.probabilities.markets[0].outcomes[0],
            teams: res.probabilities.markets[1].outcomes
          };
          return seasonData;
        })
      ); */
  }
}
