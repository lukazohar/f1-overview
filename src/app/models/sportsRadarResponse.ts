import { IStage } from '.';

export interface ISportsRadarResponse {
  generated_at: Date | string;
  schema: string;
  stage?: IStage;
  stages?: Array<IStage>;
  probabilities?: any;
}
