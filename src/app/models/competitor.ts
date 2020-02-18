import { IResult } from './result';

export interface ICompetitor {
  id: string;
  name: string;
  gender: string;
  nationality: string;
  country_code: string;
  result: IResult;
}
