import queryString from 'query-string';
import { ThemeInterface, ThemeGetQueryInterface } from 'interfaces/theme';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getThemes = async (query?: ThemeGetQueryInterface): Promise<PaginatedInterface<ThemeInterface>> => {
  return fetcher('/api/themes', {}, query);
};

export const createTheme = async (theme: ThemeInterface) => {
  return fetcher('/api/themes', { method: 'POST', body: JSON.stringify(theme) });
};

export const updateThemeById = async (id: string, theme: ThemeInterface) => {
  return fetcher(`/api/themes/${id}`, { method: 'PUT', body: JSON.stringify(theme) });
};

export const getThemeById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/themes/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteThemeById = async (id: string) => {
  return fetcher(`/api/themes/${id}`, { method: 'DELETE' });
};
