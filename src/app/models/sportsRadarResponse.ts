import { ISeason } from '.';

export interface ISportsRadarResponse {
  generated_at: string;
  schema: string;
  stages?: Array<ISeason>;
  stage?: ISeason;
}
