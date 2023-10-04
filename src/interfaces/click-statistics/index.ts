import { GetQueryInterface } from 'interfaces';

export interface ClickStatisticsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ClickStatisticsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
