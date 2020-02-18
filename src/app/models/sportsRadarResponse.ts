import { IStage } from '.';

export interface ISportsRadarResponse {
  generated_at: string;
  schema: string;
  stage?: IStage;
}
