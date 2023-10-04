import { GetQueryInterface } from 'interfaces';

export interface ThemeInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ThemeGetQueryInterface extends GetQueryInterface {
  id?: string;
}
