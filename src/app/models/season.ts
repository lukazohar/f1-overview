export interface Season {
  id: string;
  description: string;
  scheduled: Date;
  scheduled_end: Date;
  type: string;
  single_event: false;
  parents?: any;
  stages?: any;
  competitors?: any;
  teams?: any;
}
