import queryString from 'query-string';
import { ProfileInterface, ProfileGetQueryInterface } from 'interfaces/profile';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getProfiles = async (query?: ProfileGetQueryInterface): Promise<PaginatedInterface<ProfileInterface>> => {
  return fetcher('/api/profiles', {}, query);
};

export const createProfile = async (profile: ProfileInterface) => {
  return fetcher('/api/profiles', { method: 'POST', body: JSON.stringify(profile) });
};

export const updateProfileById = async (id: string, profile: ProfileInterface) => {
  return fetcher(`/api/profiles/${id}`, { method: 'PUT', body: JSON.stringify(profile) });
};

export const getProfileById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/profiles/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteProfileById = async (id: string) => {
  return fetcher(`/api/profiles/${id}`, { method: 'DELETE' });
};
