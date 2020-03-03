import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISportsRadarResponse, IStage } from '../../../models/index';
import { SportsRadarEnvironment } from 'src/environments/sportsRadarEnvironment';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {
  constructor(private httpClient: HttpClient) {}

  getSeasons(): Observable<IStage[]> {
    /* return this.httpClient
       .get<ISportsRadarResponse>(SportsRadarEnvironment.prefix + 'seasons.json' + SportsRadarEnvironment.api_key_prefix) */
    return of<ISportsRadarResponse>({
      generated_at: '2020-02-28T12:56:49+00:00',
      schema: 'http://schemas.sportradar.com/bsa/formula1/v1/json/endpoints/formula1/seasons.json',
      stages: [
        {
          id: 'sr:stage:547803',
          description: 'Formula 1 2020',
          scheduled: '2020-03-13T01:00:00+00:00',
          scheduled_end: '2020-11-29T15:10:00+00:00',
          type: 'season',
          single_event: false
        },
        {
          id: 'sr:stage:426678',
          description: 'Formula 1 2019',
          scheduled: '2019-03-15T01:00:00+00:00',
          scheduled_end: '2019-12-01T18:10:00+00:00',
          type: 'season',
          single_event: false
        }
      ]
    }).pipe(
      map((res: ISportsRadarResponse) => {
        res.stages.map((stage: IStage) => {
          stage.scheduled = new Date(stage.scheduled);
          stage.scheduled_end = new Date(stage.scheduled_end);
          return stage;
        });
        return res.stages;
      })
    );
  }

  getSeason(seasonId: string): Observable<IStage> {
    /* this.httpClient
      .get<ISportsRadarResponse>(
        SportsRadarEnvironment.prefix +
          'sport_events/' +
          seasonId +
          '/probabilities.json' +
          SportsRadarEnvironment.api_key_prefix
      ) */
    return of<ISportsRadarResponse>({
      generated_at: '2020-02-18T21:59:34+00:00',
      schema: 'http://schemas.sportradar.com/bsa/formula1/v1/json/endpoints/formula1/summary.json',
      stage: {
        id: 'sr:stage:426678',
        description: 'Formula 1 2019',
        scheduled: new Date('2019-03-15T01:00:00+00:00'),
        scheduled_end: new Date('2019-12-01T18:10:00+00:00'),
        type: 'season',
        single_event: false,
        parents: [
          {
            id: 'sr:stage:7668',
            description: 'Formula 1',
            type: 'sport',
            single_event: false
          }
        ],
        stages: [
          {
            id: 'sr:stage:427875',
            description: 'Australian Grand Prix 2019',
            scheduled: '2019-03-15T01:00:00+00:00',
            scheduled_end: '2019-03-17T07:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:428093',
            description: 'Bahrain Grand Prix 2019',
            scheduled: '2019-03-29T11:00:00+00:00',
            scheduled_end: '2019-03-31T17:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:428311',
            description: 'Chinese Grand Prix 2019',
            scheduled: '2019-04-12T02:00:00+00:00',
            scheduled_end: '2019-04-14T08:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:428529',
            description: 'Azerbaijan Grand Prix 2019',
            scheduled: '2019-04-26T09:00:00+00:00',
            scheduled_end: '2019-04-28T14:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:428747',
            description: 'Gran Premio de Espana 2019',
            scheduled: '2019-05-10T09:00:00+00:00',
            scheduled_end: '2019-05-12T15:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:428965',
            description: 'Grand Prix de Monaco 2019',
            scheduled: '2019-05-23T09:00:00+00:00',
            scheduled_end: '2019-05-26T15:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:429183',
            description: 'Grand Prix du Canada 2019',
            scheduled: '2019-06-07T14:00:00+00:00',
            scheduled_end: '2019-06-09T20:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:429403',
            description: 'Grand Prix de France 2019',
            scheduled: '2019-06-21T09:00:00+00:00',
            scheduled_end: '2019-06-23T15:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:429621',
            description: 'Grosser Preis von Osterreich 2019',
            scheduled: '2019-06-28T09:00:00+00:00',
            scheduled_end: '2019-06-30T15:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:429839',
            description: 'British Grand Prix 2019',
            scheduled: '2019-07-12T09:00:00+00:00',
            scheduled_end: '2019-07-14T15:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:430057',
            description: 'Grosser Preis von Deutschland 2019',
            scheduled: '2019-07-26T09:00:00+00:00',
            scheduled_end: '2019-07-28T15:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:430313',
            description: 'Magyar Nagydij 2019',
            scheduled: '2019-08-02T00:00:00+00:00',
            scheduled_end: '2019-08-05T00:00:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:430531',
            description: 'Belgian Grand Prix 2019',
            scheduled: '2019-08-30T00:00:00+00:00',
            scheduled_end: '2019-09-02T00:00:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:430749',
            description: 'Gran Premio DItalia 2019',
            scheduled: '2019-09-06T09:00:00+00:00',
            scheduled_end: '2019-09-08T15:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:430967',
            description: 'Singapore Grand Prix 2019',
            scheduled: '2019-09-20T08:30:00+00:00',
            scheduled_end: '2019-09-22T14:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:431185',
            description: 'Russian Grand Prix 2019',
            scheduled: '2019-09-27T08:00:00+00:00',
            scheduled_end: '2019-09-29T13:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:431403',
            description: 'Japanese Grand Prix 2019',
            scheduled: '2019-10-11T01:00:00+00:00',
            scheduled_end: '2019-10-13T07:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:431621',
            description: 'Gran Premio de Mexico 2019',
            scheduled: '2019-10-25T15:00:00+00:00',
            scheduled_end: '2019-10-27T21:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:431839',
            description: 'United States Grand Prix 2019',
            scheduled: '2019-11-01T16:00:00+00:00',
            scheduled_end: '2019-11-03T21:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:432057',
            description: 'Grande Premio do Brasil 2019',
            scheduled: '2019-11-15T14:00:00+00:00',
            scheduled_end: '2019-11-17T19:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          },
          {
            id: 'sr:stage:432275',
            description: 'Abu Dhabi Grand Prix 2019',
            scheduled: '2019-11-29T09:00:00+00:00',
            scheduled_end: '2019-12-01T15:10:00+00:00',
            type: 'event',
            status: 'Finished',
            single_event: false
          }
        ],
        competitors: [
          {
            id: 'sr:competitor:7135',
            name: 'Hamilton, Lewis',
            gender: 'male',
            nationality: 'Great Britain',
            country_code: 'GBR',
            result: {
              points: 413,
              car_number: 44,
              position: 1,
              victories: 11,
              races: 21,
              races_with_points: 21,
              polepositions: 5,
              podiums: 17,
              fastest_laps: 6,
              victory_pole_and_fastest_lap: 1
            }
          },
          {
            id: 'sr:competitor:41600',
            name: 'Bottas, Valtteri',
            gender: 'male',
            nationality: 'Finland',
            country_code: 'FIN',
            result: {
              points: 326,
              car_number: 77,
              position: 2,
              victories: 4,
              races: 21,
              races_with_points: 19,
              polepositions: 5,
              podiums: 15,
              fastest_laps: 3
            }
          },
          {
            id: 'sr:competitor:178318',
            name: 'Verstappen, Max',
            gender: 'male',
            nationality: 'Netherlands',
            country_code: 'NLD',
            result: {
              points: 278,
              car_number: 33,
              position: 3,
              victories: 3,
              races: 21,
              races_with_points: 19,
              polepositions: 2,
              podiums: 9,
              fastest_laps: 3
            }
          },
          {
            id: 'sr:competitor:269471',
            name: 'Leclerc, Charles',
            gender: 'male',
            nationality: 'Monaco',
            country_code: 'MCO',
            result: {
              points: 264,
              car_number: 16,
              position: 4,
              victories: 2,
              races: 21,
              races_with_points: 18,
              polepositions: 7,
              podiums: 10,
              fastest_laps: 4
            }
          },
          {
            id: 'sr:competitor:7610',
            name: 'Vettel, Sebastian',
            gender: 'male',
            nationality: 'Germany',
            country_code: 'DEU',
            result: {
              points: 240,
              car_number: 5,
              position: 5,
              victories: 1,
              races: 21,
              races_with_points: 16,
              polepositions: 2,
              podiums: 9,
              fastest_laps: 2
            }
          },
          {
            id: 'sr:competitor:189029',
            name: 'Sainz Jr, Carlos',
            gender: 'male',
            nationality: 'Spain',
            country_code: 'ESP',
            result: {
              points: 96,
              car_number: 55,
              position: 6,
              races: 21,
              races_with_points: 13,
              podiums: 1
            }
          },
          {
            id: 'sr:competitor:381362',
            name: 'Gasly, Pierre',
            gender: 'male',
            nationality: 'France',
            country_code: 'FRA',
            result: {
              points: 95,
              car_number: 10,
              position: 7,
              races: 21,
              races_with_points: 14,
              podiums: 1,
              fastest_laps: 2
            }
          },
          {
            id: 'sr:competitor:522994',
            name: 'Albon, Alexander',
            gender: 'male',
            nationality: 'Thailand',
            country_code: 'THA',
            result: {
              points: 92,
              car_number: 23,
              position: 8,
              races: 21,
              races_with_points: 13
            }
          },
          {
            id: 'sr:competitor:41603',
            name: 'Ricciardo, Daniel',
            gender: 'male',
            nationality: 'Australia',
            country_code: 'AUS',
            result: {
              points: 54,
              car_number: 3,
              position: 9,
              races: 21,
              races_with_points: 8
            }
          },
          {
            id: 'sr:competitor:46337',
            name: 'Perez, Sergio',
            gender: 'male',
            nationality: 'Mexico',
            country_code: 'MEX',
            result: {
              points: 52,
              car_number: 11,
              position: 10,
              races: 21,
              races_with_points: 11
            }
          },
          {
            id: 'sr:competitor:495898',
            name: 'Norris, Lando',
            gender: 'male',
            nationality: 'Great Britain',
            country_code: 'GBR',
            result: {
              points: 49,
              car_number: 4,
              position: 11,
              races: 21,
              races_with_points: 11
            }
          },
          {
            id: 'sr:competitor:4538',
            name: 'Raikkonen, Kimi',
            gender: 'male',
            nationality: 'Finland',
            country_code: 'FIN',
            result: {
              points: 43,
              car_number: 7,
              position: 12,
              races: 21,
              races_with_points: 9
            }
          },
          {
            id: 'sr:competitor:131762',
            name: 'Kvyat, Daniil',
            gender: 'male',
            nationality: 'Russia',
            country_code: 'RUS',
            result: {
              points: 37,
              car_number: 26,
              position: 13,
              races: 21,
              races_with_points: 10,
              podiums: 1
            }
          },
          {
            id: 'sr:competitor:39412',
            name: 'Hulkenberg, Nico',
            gender: 'male',
            nationality: 'Germany',
            country_code: 'DEU',
            result: {
              points: 37,
              car_number: 27,
              position: 14,
              races: 21,
              races_with_points: 10
            }
          },
          {
            id: 'sr:competitor:302866',
            name: 'Stroll, Lance',
            gender: 'male',
            nationality: 'Canada',
            country_code: 'CAN',
            result: {
              points: 21,
              car_number: 18,
              position: 15,
              races: 21,
              races_with_points: 6
            }
          },
          {
            id: 'sr:competitor:135592',
            name: 'Magnussen, Kevin',
            gender: 'male',
            nationality: 'Denmark',
            country_code: 'DNK',
            result: {
              points: 20,
              car_number: 20,
              position: 16,
              races: 21,
              races_with_points: 4,
              fastest_laps: 1
            }
          },
          {
            id: 'sr:competitor:222584',
            name: 'Giovinazzi, Antonio',
            gender: 'male',
            nationality: 'Italy',
            country_code: 'ITA',
            result: {
              points: 14,
              car_number: 99,
              position: 17,
              races: 21,
              races_with_points: 4
            }
          },
          {
            id: 'sr:competitor:37294',
            name: 'Grosjean, Romain',
            gender: 'male',
            nationality: 'France',
            country_code: 'FRA',
            result: {
              points: 8,
              car_number: 8,
              position: 18,
              races: 21,
              races_with_points: 3
            }
          },
          {
            id: 'sr:competitor:6152',
            name: 'Kubica, Robert',
            gender: 'male',
            nationality: 'Poland',
            country_code: 'POL',
            result: {
              points: 1,
              car_number: 88,
              position: 19,
              races: 21,
              races_with_points: 1
            }
          },
          {
            id: 'sr:competitor:391432',
            name: 'Russell, George',
            gender: 'male',
            nationality: 'Great Britain',
            country_code: 'GBR',
            result: {
              car_number: 63,
              position: 20,
              races: 21
            }
          }
        ],
        teams: [
          {
            id: 'sr:competitor:41127',
            name: 'Mercedes',
            gender: 'male',
            nationality: 'Germany',
            country_code: 'DEU',
            result: {
              points: 739,
              position: 1,
              victories: 15,
              races: 21,
              races_with_points: 21,
              polepositions: 10,
              podiums: 32,
              fastest_laps: 9
            }
          },
          {
            id: 'sr:competitor:4510',
            name: 'Ferrari',
            gender: 'male',
            nationality: 'Italy',
            country_code: 'ITA',
            result: {
              points: 504,
              position: 2,
              victories: 3,
              races: 21,
              races_with_points: 20,
              polepositions: 9,
              podiums: 19,
              fastest_laps: 6
            }
          },
          {
            id: 'sr:competitor:4978',
            name: 'Red Bull Racing',
            gender: 'male',
            nationality: 'Austria',
            country_code: 'AUT',
            result: {
              points: 417,
              position: 3,
              victories: 3,
              races: 21,
              races_with_points: 19,
              polepositions: 2,
              podiums: 9,
              fastest_laps: 5
            }
          },
          {
            id: 'sr:competitor:4514',
            name: 'McLaren',
            gender: 'male',
            nationality: 'Great Britain',
            country_code: 'GBR',
            result: {
              points: 145,
              position: 4,
              races: 21,
              races_with_points: 16,
              podiums: 1
            }
          },
          {
            id: 'sr:competitor:4512',
            name: 'Renault F1 Team',
            gender: 'male',
            nationality: 'France',
            country_code: 'FRA',
            result: {
              points: 91,
              position: 5,
              races: 21,
              races_with_points: 13
            }
          },
          {
            id: 'sr:competitor:5771',
            name: 'Alphatauri',
            gender: 'male',
            nationality: 'Italy',
            country_code: 'ITA',
            result: {
              points: 85,
              position: 6,
              races: 21,
              races_with_points: 16,
              podiums: 2
            }
          },
          {
            id: 'sr:competitor:496090',
            name: 'Racing Point F1 Team',
            gender: 'male',
            nationality: 'Great Britain',
            country_code: 'GBR',
            result: {
              points: 73,
              position: 7,
              races: 21,
              races_with_points: 13
            }
          },
          {
            id: 'sr:competitor:4515',
            name: 'Alfa Romeo Racing',
            gender: 'male',
            nationality: 'Switzerland',
            country_code: 'CHE',
            result: {
              points: 57,
              position: 8,
              races: 21,
              races_with_points: 11
            }
          },
          {
            id: 'sr:competitor:242902',
            name: 'Haas F1 Team',
            gender: 'male',
            nationality: 'USA',
            country_code: 'USA',
            result: {
              points: 28,
              position: 9,
              races: 21,
              races_with_points: 5,
              fastest_laps: 1
            }
          },
          {
            id: 'sr:competitor:4511',
            name: 'Williams',
            gender: 'male',
            nationality: 'Great Britain',
            country_code: 'GBR',
            result: {
              points: 1,
              position: 10,
              races: 21,
              races_with_points: 1
            }
          }
        ]
      }
    }).pipe(map((res: ISportsRadarResponse) => res.stage));
  }
}
