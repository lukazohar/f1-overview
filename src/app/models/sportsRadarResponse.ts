import { Season } from '.';

export interface SportsRadarResponse {
  generated_at: string;
  schema: string;
  stages?: Array<Season>;
  stage?: Season;
}
