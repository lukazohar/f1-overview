export interface ISeason {
  id: string;
  description: string;
  scheduled: Date;
  scheduled_end: Date;
  type?: string;
  single_event?: false;
  parents?: any;
  winner?: any;
  teams?: Array<any>;
}
