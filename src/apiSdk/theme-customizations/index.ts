import queryString from 'query-string';
import { ThemeCustomizationInterface, ThemeCustomizationGetQueryInterface } from 'interfaces/theme-customization';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getThemeCustomizations = async (
  query?: ThemeCustomizationGetQueryInterface,
): Promise<PaginatedInterface<ThemeCustomizationInterface>> => {
  return fetcher('/api/theme-customizations', {}, query);
};

export const createThemeCustomization = async (themeCustomization: ThemeCustomizationInterface) => {
  return fetcher('/api/theme-customizations', { method: 'POST', body: JSON.stringify(themeCustomization) });
};

export const updateThemeCustomizationById = async (id: string, themeCustomization: ThemeCustomizationInterface) => {
  return fetcher(`/api/theme-customizations/${id}`, { method: 'PUT', body: JSON.stringify(themeCustomization) });
};

export const getThemeCustomizationById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/theme-customizations/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteThemeCustomizationById = async (id: string) => {
  return fetcher(`/api/theme-customizations/${id}`, { method: 'DELETE' });
};
