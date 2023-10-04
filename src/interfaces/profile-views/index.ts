import { GetQueryInterface } from 'interfaces';

export interface ProfileViewsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ProfileViewsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
