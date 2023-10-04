import queryString from 'query-string';
import { AnalyticsInterface, AnalyticsGetQueryInterface } from 'interfaces/analytics';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAnalytics = async (
  query?: AnalyticsGetQueryInterface,
): Promise<PaginatedInterface<AnalyticsInterface>> => {
  return fetcher('/api/analytics', {}, query);
};

export const createAnalytics = async (analytics: AnalyticsInterface) => {
  return fetcher('/api/analytics', { method: 'POST', body: JSON.stringify(analytics) });
};

export const updateAnalyticsById = async (id: string, analytics: AnalyticsInterface) => {
  return fetcher(`/api/analytics/${id}`, { method: 'PUT', body: JSON.stringify(analytics) });
};

export const getAnalyticsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/analytics/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteAnalyticsById = async (id: string) => {
  return fetcher(`/api/analytics/${id}`, { method: 'DELETE' });
};
