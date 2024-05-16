// export const subscriptTypes = {once: 'once', multiple: 'multiple'};
import { subscriptionTypes } from '../types/subscriptions';

export const defaultSubscriptType: subscriptionTypes = 'oneTime';
export const subscriptionData: {
  [key in subscriptionTypes]: { tabText: string; tabType: subscriptionTypes };
} = {
  oneTime: {
    tabText: 'One time service',
    tabType: 'oneTime',
  },
  multiple: {
    tabText: 'Subscription',
    tabType: 'multiple',
  },
};
