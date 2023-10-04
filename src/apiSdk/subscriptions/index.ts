import queryString from 'query-string';
import { SubscriptionInterface, SubscriptionGetQueryInterface } from 'interfaces/subscription';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSubscriptions = async (
  query?: SubscriptionGetQueryInterface,
): Promise<PaginatedInterface<SubscriptionInterface>> => {
  return fetcher('/api/subscriptions', {}, query);
};

export const createSubscription = async (subscription: SubscriptionInterface) => {
  return fetcher('/api/subscriptions', { method: 'POST', body: JSON.stringify(subscription) });
};

export const updateSubscriptionById = async (id: string, subscription: SubscriptionInterface) => {
  return fetcher(`/api/subscriptions/${id}`, { method: 'PUT', body: JSON.stringify(subscription) });
};

export const getSubscriptionById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/subscriptions/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteSubscriptionById = async (id: string) => {
  return fetcher(`/api/subscriptions/${id}`, { method: 'DELETE' });
};
