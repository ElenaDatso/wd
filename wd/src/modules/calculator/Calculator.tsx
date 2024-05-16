import React, {useState, useEffect, ChangeEvent} from 'react';
import {PropType} from '../../libs/types/propety';
import { subscriptionTypes } from '../../libs/types/subscriptions';
import { Plans } from '../../libs/types/plans';
import {propsPlansList} from '../../libs/data';

type calcType = {
  preSetProperty: PropType;
  preSetSubscript: subscriptionTypes;
  presetPlan: Plans;
};

const Properties: {[key in PropType]: PropType} = {House: 'House', Office: 'Office'};
const Plan: {[key in Plans]: Plans} = {'advanced': 'advanced', 'all-inclusive': 'all-inclusive', 'basic': 'basic'};
const subscriptions: {[key in subscriptionTypes]: subscriptionTypes} = {'multiple': 'multiple', 'oneTime': 'oneTime'}

function Calculator(props: calcType) {
  const [presetProp, resetProp] = useState(props.preSetProperty);
  const [presetSubscript, resetSubscript] = useState(props.preSetSubscript);
  const [presetPlan, resetPlan] = useState(props.presetPlan);
  const [footage, resetFootage] = useState(0);

  useEffect(() => {
    resetProp(props.preSetProperty);
  }, [props.preSetProperty]);

  useEffect(() => {
    resetSubscript(props.preSetSubscript);
  }, [props.preSetSubscript]);

  useEffect(() => {
    resetPlan(props.presetPlan);
  }, [props.presetPlan]);

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    switch (event.currentTarget.name) {
      case 'prop_type':
        resetProp(event.currentTarget.value as PropType);
        break;
      case 'service_subscription':
        resetSubscript(event.currentTarget.value as subscriptionTypes);
        break;
      case 'planType':
        resetPlan(event.currentTarget.value as Plans);
    }
  };

  return (
    <form>
      <div className="flex">
        <div>
          <p>Estimate</p>
          <p>Choose property type</p>
          <div>
            <select
              name="prop_type"
              value={presetProp}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => changeHandler(e)}
            >
              <option value={Properties.House}>House</option>
              <option value={Properties.Office}>Office</option>
            </select>
          </div>
          <div>
            <p>Type of service</p>
            <select
              name="service_subscription"
              value={presetSubscript}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => changeHandler(e)}
            >
              <option value={subscriptions.oneTime}>One time service</option>
              <option value={subscriptions.multiple}>Subscription</option>
            </select>
          </div>
          <div>
            <p>Total footage</p>
            <input
              type="number"
              min={0}
              max={9999}
              onChange={(e: ChangeEvent<HTMLInputElement>) => resetFootage(Number(e.currentTarget.value))}
            ></input>
          </div>
          <div>
            <p>Chosen Plan</p>
            <select
              name="planType"
              value={presetPlan}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => changeHandler(e)}
            >
              <option value={Plan.basic}>Basic</option>
              <option value={Plan.advanced}>Advanced</option>
              <option value={Plan['all-inclusive']}>All inclusive</option>
            </select>
          </div>
          <input type="date"></input>
          <hr />
          <p>
            Estimate total:
            {
              Number(propsPlansList[presetProp][presetPlan].subscriprion[
                presetSubscript
              ]) * footage
            } CAD
          </p>
        </div>
        <div>
          <p>Contact information</p>
          <div>
            <input type="text" id="name" placeholder="Your Name"></input>
            <label>First and last name</label>
          </div>
          <div>
            <input
              type="number"
              placeholder="1(xxx)xxx-xx-xx"
              id="phone"
            ></input>
            <label>Contact number</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="your-email@hosting.com"
              id="email"
            ></input>
            <label>E-mail</label>
          </div>
        </div>
        <input type="submit"></input>
      </div>
    </form>
  );
}

export default Calculator;
