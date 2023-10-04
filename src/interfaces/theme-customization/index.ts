import { GetQueryInterface } from 'interfaces';

export interface ThemeCustomizationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ThemeCustomizationGetQueryInterface extends GetQueryInterface {
  id?: string;
}
