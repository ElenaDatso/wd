import { subscriptionTypes } from '../types/subscriptions';
import type {
  PlansListType,
  Plans,
} from '../../libs/types/plans';
import { PropType } from '../types/propety';

export const propsPlansList: {
  [key in PropType]: {
    [key in Plans]: { subscriprion: { [key in subscriptionTypes]: string } };
  };
} = {
  House: {
    basic: {
      subscriprion: {
        oneTime: `${1}`,
        multiple: `${0.8}`,
      },
    },
    advanced: {
      subscriprion: {
        oneTime: `${1.2}`,
        multiple: `${1}`,
      },
    },
    'all-inclusive': {
      subscriprion: {
        oneTime: `${1.5}`,
        multiple: `${1.2}`,
      },
    },
  },
  Office: {
    basic: {
      subscriprion: {
        oneTime: `${2}`,
        multiple: `${1.8}`,
      },
    },
    advanced: {
      subscriprion: {
        oneTime: `${2.2}`,
        multiple: `${2}`,
      },
    },
    'all-inclusive': {
      subscriprion: {
        oneTime: `${2.5}`,
        multiple: `${2.2}`,
      },
    },
  },
};

export const homeServicesListObj: PlansListType = {
  basic: [
    'Detailing of Kitchen',
    'Detailing of Bathrooms',
    'Detailed Dustin',
    'Window Sills',
    'Vacuuming',
    'Washing Floors',
    'Light Organizing',
    'Spot Washing Walls',
    'Baseboards',
  ],
  advanced: [
    'Door Frames',
    'Light Fixtures',
    'Inside Windows',
    'Inside of Fridge',
    'Inside of Stove',
  ],
  'all-inclusive': ['Inside of Cupboards', 'Making of Beds'],
};

export const officeServicesList = {
  basic: [
    'Dusting of Desks',
    'Cleaning of Office Chairs',
    'Emptying Trash Bins',
    'Wiping Surfaces',
    'Vacuuming Carpets',
    'Mopping Floors',
    'Cleaning Restrooms',
    'Restocking Supplies',
  ],
  advanced: [
    'Cleaning Electronics (Computers, Monitors, etc.)',
    'Polishing of Furniture',
    'Sanitizing High-Touch Surfaces',
    'Cleaning Kitchenette or Break Room',
    'Washing Windows',
  ],
  'all-inclusive': ['Deep Cleaning of Carpets', 'Disinfecting Common Areas'],
};
