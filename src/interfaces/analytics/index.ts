import { GetQueryInterface } from 'interfaces';

export interface AnalyticsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AnalyticsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
