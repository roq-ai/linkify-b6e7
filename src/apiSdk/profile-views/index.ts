import queryString from 'query-string';
import { ProfileViewsInterface, ProfileViewsGetQueryInterface } from 'interfaces/profile-views';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getProfileViews = async (
  query?: ProfileViewsGetQueryInterface,
): Promise<PaginatedInterface<ProfileViewsInterface>> => {
  return fetcher('/api/profile-views', {}, query);
};

export const createProfileViews = async (profileViews: ProfileViewsInterface) => {
  return fetcher('/api/profile-views', { method: 'POST', body: JSON.stringify(profileViews) });
};

export const updateProfileViewsById = async (id: string, profileViews: ProfileViewsInterface) => {
  return fetcher(`/api/profile-views/${id}`, { method: 'PUT', body: JSON.stringify(profileViews) });
};

export const getProfileViewsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/profile-views/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteProfileViewsById = async (id: string) => {
  return fetcher(`/api/profile-views/${id}`, { method: 'DELETE' });
};
