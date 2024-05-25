import React, { ReactNode, useState, useEffect, useCallback } from 'react';
import type { Plans } from '../../../libs/types/plans';
import { servises, propsPlansList } from '../../../libs/data';
import { PropType } from '../../../libs/types/propety';
import { tabs } from '../../../libs/data/tabs';
import PropertyTypeTab from '../property_type_tab/PropertyTypeTab';
import classes from './PriceColumn.module.scss';
import GreenButton from '../../../ui/green_button/GreenButton';
import BroomIcon from '/broom.svg';
import { subscriptionTypes } from '../../../libs/types/subscriptions';

type PricesColType = {
  planName: Plans;
  planIcon: ReactNode;
  ifChosenPlan: boolean;
  onChoosePlan: (chosenPlan: Plans) => void;
  chosenPropType: PropType;
  onChoosePropType: (chosenPropType: PropType) => void;
  subscriptType: subscriptionTypes;
  onBookingClick: () => void;
};

function PricesColumn(props: PricesColType) {
  const [officeTab, houseTab] = tabs;
  const [onHover, setOnHover] = useState(props.ifChosenPlan);

  const handleTabClick = (tabText: PropType) => {
    props.onChoosePropType(tabText);
  };

  const onHoverHandler = useCallback(
    (ifOnHover: boolean) => {
      if (props.ifChosenPlan) {
        setOnHover(true);
        return;
      }
      setOnHover(ifOnHover);
    },
    [props.ifChosenPlan]
  );

  useEffect(() => {
    onHoverHandler(props.ifChosenPlan);
  }, [onHoverHandler, props.ifChosenPlan]);
  const services =
    props.chosenPropType === 'House'
      ? servises.homeServicesListObj
      : servises.officeServicesList;
  const price = propsPlansList[props.chosenPropType];

  const planFilter = () => {
    const filtered: { [key: string]: string[] } = {
      included: [],
      notIncluded: [],
    };

    if (props.planName == 'basic') {
      filtered.included = filtered.included.concat(services['basic']);
      filtered.notIncluded = filtered.notIncluded
        .concat(services['advanced'])
        .concat(services['all-inclusive']);
    }
    if (props.planName == 'advanced') {
      filtered.included = filtered.included
        .concat(services['basic'])
        .concat(services['advanced']);
      filtered.notIncluded = filtered.notIncluded.concat(
        services['all-inclusive']
      );
    }
    if (props.planName == 'all-inclusive')
      filtered.included = filtered.included
        .concat(services['basic'])
        .concat(services['advanced'])
        .concat(services['all-inclusive']);

    return filtered;
  };

  return (
    <>
      <div
        className={`${classes.priceCol} ${classes.priceCol_wrap} ${props.ifChosenPlan && classes['priceCol_wrap__active']} ${onHover && classes['priceCol_wrap__active']}`}
        onClick={() => props.onChoosePlan(props.planName)}
        onMouseOver={() => onHoverHandler(true)}
        onMouseOut={() => onHoverHandler(false)}
      >
        <div className={`flex w-full`}>
          {onHover && (
            <>
              <PropertyTypeTab
                key={officeTab.tabText}
                onChooseTab={handleTabClick}
                tabicon={officeTab.tabicon}
                tabText={officeTab.tabText}
                position="left"
                isActive={
                  props.chosenPropType === officeTab.tabText ? true : false
                }
              ></PropertyTypeTab>
              <PropertyTypeTab
                key={houseTab.tabText}
                onChooseTab={handleTabClick}
                tabicon={houseTab.tabicon}
                tabText={houseTab.tabText}
                position="right"
                isActive={
                  props.chosenPropType === houseTab.tabText ? true : false
                }
              ></PropertyTypeTab>
            </>
          )}
        </div>
        <div
          className={`${classes.priceCol_inner} ${onHover && classes.priceCol_inner__active}`}
        >
          <div className={`${classes['priceCol_iconWrap']}`}>
            <img src={BroomIcon} alt="service icon" />
          </div>
          <h3 className={`${classes['priceCol_planName']}`}>
            {props.planName}
          </h3>
          <p className={`${classes['priceCol_priceRow']}`}>
            <span className={`${classes['priceCol_priceRow_from']}`}>from</span>
            <span className={`${classes['priceCol_priceRow_numbers']}`}>
              ${price[props.planName].subscriprion[props.subscriptType]}
            </span>
            <span className={`${classes['priceCol_priceRow_slash']}`}>/</span>
            <span className={`${classes['priceCol_priceRow_ft']}`}>
              ft<sup>2</sup>
            </span>
          </p>
          <div>
            {planFilter()?.included.map((row: string) => (
              <p
                className={`${classes['priceCol_serviceLine']} ${classes['priceCol_serviceLine__included']}`}
                key={row}
              >
                {row}
              </p>
            ))}
          </div>
          <div>
            {planFilter()?.notIncluded.map((row: string) => (
              <p
                key={row}
                className={`${classes['priceCol_serviceLine']} ${classes['priceCol_serviceLine__notIncluded']}`}
              >
                {row}
              </p>
            ))}
          </div>
        </div>
        {onHover && (
          <div
            className={`${classes['button_wrap']}`}
            onClick={() => props.onBookingClick()}
          >
            <GreenButton>{<span>Estimate & book</span>}</GreenButton>
          </div>
        )}
      </div>
    </>
  );
}

export default PricesColumn;
