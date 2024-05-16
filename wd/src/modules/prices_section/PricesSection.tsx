import React, { useState, useRef } from 'react';
import classes from './PricesSection.module.scss';
import { Plans } from '../../libs/types/plans';
import PricesColumn from './price_column/PricesColumn';
import { PropType } from '../../libs/types/propety';
import SubscriptionTypeTab from './subsctiption_type/SubscriptionTypeTab';
import { defaultSubscriptType } from '../../libs/data/subsctiptions';
import { subscriptionTypes } from '../../libs/types/subscriptions';
import PlanIcon from '/broom.svg';
import Modal from '../../ui/modal/Modal';
import { HTMLDialogElementWithModal } from '../../libs/interfaces';
import Calculator from '../calculator/Calculator';

function QuoteSection() {
  const [chosenPlan, setChosenPlan] = useState<Plans>('advanced');
  const [chosenPropTypeTab, setChosenPropTypeTab] = useState<PropType>('House');
  const [chosenSubscriptTab, setChosenSubscriptTab] =
    useState(defaultSubscriptType);

  const modal = useRef() as React.MutableRefObject<HTMLDialogElementWithModal>;

  const chooseSubscriptTypeHandler = (subscriptType: subscriptionTypes) => {
    setChosenSubscriptTab(subscriptType);
  };

  const choosePlanHandler = (chosenPlan: Plans) => {
    setChosenPlan(chosenPlan);
  };

  const choosePropTypeTabHandler = (chosenPropType: PropType) => {
    setChosenPropTypeTab(chosenPropType);
  };

  const onBookingHandler = () => {
    modal.current && modal.current.openModal();
  };

  return (
    <>
      <Modal ref={modal}>
        <Calculator
          preSetProperty={chosenPropTypeTab}
          preSetSubscript={chosenSubscriptTab}
          presetPlan={chosenPlan}
        ></Calculator>
      </Modal>
      <section className={`${classes['pricesSection']}`}>
        <div className={`${classes['pricesSection_bg']}`}> </div>
        <div className={`${classes['pricesSection_wrap']}`}>
          <h2 className={`${classes['pricesSection_header']}`}>
            Services & prices
          </h2>
          <div className={`${classes['pricesSection_subscriptTabsWrap']}`}>
            <SubscriptionTypeTab
              activeSubscriptTab={chosenSubscriptTab}
              onChooseSubscript={chooseSubscriptTypeHandler}
            ></SubscriptionTypeTab>
          </div>
          <div className={`${classes['pricesSection_inner']}`}>
            <div
              className={`${classes['proptertyTabs']} flex gap-2 items-center justify-center`}
            ></div>
            <div className=" flex justify-center gap-10">
              <PricesColumn
                subscriptType={chosenSubscriptTab}
                planName={'basic'}
                planIcon={PlanIcon}
                ifChosenPlan={chosenPlan === 'basic' ? true : false}
                onChoosePlan={choosePlanHandler}
                chosenPropType={chosenPropTypeTab}
                onChoosePropType={choosePropTypeTabHandler}
                onBookingClick={onBookingHandler}
              />
              <PricesColumn
                subscriptType={chosenSubscriptTab}
                planName={'advanced'}
                planIcon={PlanIcon}
                ifChosenPlan={chosenPlan === 'advanced' ? true : false}
                onChoosePlan={choosePlanHandler}
                chosenPropType={chosenPropTypeTab}
                onChoosePropType={choosePropTypeTabHandler}
                onBookingClick={onBookingHandler}
              />
              <PricesColumn
                subscriptType={chosenSubscriptTab}
                planName={'all-inclusive'}
                planIcon={PlanIcon}
                ifChosenPlan={chosenPlan === 'all-inclusive' ? true : false}
                onChoosePlan={choosePlanHandler}
                chosenPropType={chosenPropTypeTab}
                onChoosePropType={choosePropTypeTabHandler}
                onBookingClick={onBookingHandler}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QuoteSection;
