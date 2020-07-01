import { IParent } from './parent';
import { ICompetitor } from './competitor';
import { ITeam } from './team';

export interface IStage {
  id: string;
  description: string;
  scheduled: Date | string;
  scheduled_end: Date | string;
  type: string;
  single_event: boolean;
  status?: string;
  finished?: boolean;
  parents?: Array<IParent>;
  stages?: Array<IStage>;
  competitors?: Array<ICompetitor>;
  teams?: Array<ITeam>;
  winner?: ICompetitor;
}
