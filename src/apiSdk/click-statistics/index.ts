import queryString from 'query-string';
import { ClickStatisticsInterface, ClickStatisticsGetQueryInterface } from 'interfaces/click-statistics';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getClickStatistics = async (
  query?: ClickStatisticsGetQueryInterface,
): Promise<PaginatedInterface<ClickStatisticsInterface>> => {
  return fetcher('/api/click-statistics', {}, query);
};

export const createClickStatistics = async (clickStatistics: ClickStatisticsInterface) => {
  return fetcher('/api/click-statistics', { method: 'POST', body: JSON.stringify(clickStatistics) });
};

export const updateClickStatisticsById = async (id: string, clickStatistics: ClickStatisticsInterface) => {
  return fetcher(`/api/click-statistics/${id}`, { method: 'PUT', body: JSON.stringify(clickStatistics) });
};

export const getClickStatisticsById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/click-statistics/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteClickStatisticsById = async (id: string) => {
  return fetcher(`/api/click-statistics/${id}`, { method: 'DELETE' });
};
