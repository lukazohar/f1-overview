import { IParent } from './parent';
import { ICompetitor } from './competitor';
import { ITeam } from './team';

export interface IStage {
  id: string;
  description: string;
  scheduled: Date;
  scheduled_end: Date;
  type: string;
  single_event: boolean;
  parents?: Array<IParent>;
  stages?: Array<IStage>;
  competitors?: Array<ICompetitor>;
  teams?: Array<ITeam>;
}
