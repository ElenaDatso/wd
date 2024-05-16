import React from 'react';
import { subscriptionData } from '../../../libs/data/subsctiptions';
import classes from './SubscriptionType.module.scss';
import { subscriptionTypes } from '../../../libs/types/subscriptions';

function SubscriptionTypeTab(props: {
  activeSubscriptTab: subscriptionTypes;
  onChooseSubscript: (subscriptType: subscriptionTypes) => void;
}) {
  return (
    <div
      className={`${classes['subscriptionType']} ${classes.subscriptionType_wrap} flex`}
    >
      <div className={`${classes['subscriptionType_inner']} flex gap-4`}>
        <div
          className={`${props.activeSubscriptTab === subscriptionData.oneTime.tabType ? classes['subscriptionType_tab__active'] : ''} ${classes['subscriptionType_tab']}`}
          onClick={() =>
            props.onChooseSubscript(subscriptionData.oneTime.tabType)
          }
        >
          {subscriptionData.oneTime.tabText}
        </div>
        <div
          className={`${props.activeSubscriptTab === subscriptionData.multiple.tabType ? classes['subscriptionType_tab__active'] : ''}  ${classes['subscriptionType_tab']}`}
          onClick={() =>
            props.onChooseSubscript(subscriptionData.multiple.tabType)
          }
        >
          {subscriptionData.multiple.tabText}
        </div>
      </div>
    </div>
  );
}

export default SubscriptionTypeTab;
