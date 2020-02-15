import { Season } from '.';

export interface ISportsRadarResponse {
  generated_at: string;
  schema: string;
  stages?: Array<Season>;
  stage?: Season;
}
