import queryString from 'query-string';
import { LinkClicksInterface, LinkClicksGetQueryInterface } from 'interfaces/link-clicks';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLinkClicks = async (
  query?: LinkClicksGetQueryInterface,
): Promise<PaginatedInterface<LinkClicksInterface>> => {
  return fetcher('/api/link-clicks', {}, query);
};

export const createLinkClicks = async (linkClicks: LinkClicksInterface) => {
  return fetcher('/api/link-clicks', { method: 'POST', body: JSON.stringify(linkClicks) });
};

export const updateLinkClicksById = async (id: string, linkClicks: LinkClicksInterface) => {
  return fetcher(`/api/link-clicks/${id}`, { method: 'PUT', body: JSON.stringify(linkClicks) });
};

export const getLinkClicksById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/link-clicks/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteLinkClicksById = async (id: string) => {
  return fetcher(`/api/link-clicks/${id}`, { method: 'DELETE' });
};
