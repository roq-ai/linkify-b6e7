import { GetQueryInterface } from 'interfaces';

export interface LinkClicksInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface LinkClicksGetQueryInterface extends GetQueryInterface {
  id?: string;
}
