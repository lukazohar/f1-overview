import { IResult } from './result';

export interface ITeam {
  id: string;
  name: string;
  gender: string;
  nationality: string;
  country_code: string;
  result: IResult;
}
