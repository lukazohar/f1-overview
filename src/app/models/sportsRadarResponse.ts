import { ISeason } from '.';

export interface ISportsRadarResponse {
  generated_at: string;
  schema: string;
  stages?: Array<ISeason>;
  stage?: ISeason;
  probabilities?: {
    markets: [
      {
        name: string;
        type: string;
        description: string;
        outcomes: [
          {
            id: string;
            name: string;
            probability: string;
            competitor: {
              id: string;
              name: string;
              gender: string;
              nationality: string;
              country_code: string;
            };
          }
        ];
      },
      {
        name: string;
        type: string;
        description: string;
        outcomes: [
          {
            id: string;
            name: string;
            probability: string;
            team: {
              id: string;
              name: string;
              gender: string;
              nationality: string;
              country_code: string;
            };
          }
        ];
      }
    ];
  };
}
