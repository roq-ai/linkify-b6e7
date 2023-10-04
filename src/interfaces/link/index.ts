import { GetQueryInterface } from 'interfaces';

export interface LinkInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface LinkGetQueryInterface extends GetQueryInterface {
  id?: string;
}
