import { GetQueryInterface } from 'interfaces';

export interface ProfileInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ProfileGetQueryInterface extends GetQueryInterface {
  id?: string;
}
