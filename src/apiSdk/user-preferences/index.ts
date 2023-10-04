import queryString from 'query-string';
import { UserPreferencesInterface, UserPreferencesGetQueryInterface } from 'interfaces/user-preferences';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserPreferences = async (
  query?: UserPreferencesGetQueryInterface,
): Promise<PaginatedInterface<UserPreferencesInterface>> => {
  return fetcher('/api/user-preferences', {}, query);
};

export const createUserPreferences = async (userPreferences: UserPreferencesInterface) => {
  return fetcher('/api/user-preferences', { method: 'POST', body: JSON.stringify(userPreferences) });
};

export const updateUserPreferencesById = async (id: string, userPreferences: UserPreferencesInterface) => {
  return fetcher(`/api/user-preferences/${id}`, { method: 'PUT', body: JSON.stringify(userPreferences) });
};

export const getUserPreferencesById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/user-preferences/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteUserPreferencesById = async (id: string) => {
  return fetcher(`/api/user-preferences/${id}`, { method: 'DELETE' });
};
