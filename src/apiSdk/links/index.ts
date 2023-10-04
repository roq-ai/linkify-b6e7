import queryString from 'query-string';
import { LinkInterface, LinkGetQueryInterface } from 'interfaces/link';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLinks = async (query?: LinkGetQueryInterface): Promise<PaginatedInterface<LinkInterface>> => {
  return fetcher('/api/links', {}, query);
};

export const createLink = async (link: LinkInterface) => {
  return fetcher('/api/links', { method: 'POST', body: JSON.stringify(link) });
};

export const updateLinkById = async (id: string, link: LinkInterface) => {
  return fetcher(`/api/links/${id}`, { method: 'PUT', body: JSON.stringify(link) });
};

export const getLinkById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/links/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteLinkById = async (id: string) => {
  return fetcher(`/api/links/${id}`, { method: 'DELETE' });
};
