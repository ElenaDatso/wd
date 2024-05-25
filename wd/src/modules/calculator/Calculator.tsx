import React, {useState, useEffect, ChangeEvent, useRef} from 'react';
import {PropType} from '../../libs/types/propety';
import { subscriptionTypes } from '../../libs/types/subscriptions';
import { Plans } from '../../libs/types/plans';
import {propsPlansList} from '../../libs/data';
import classes from './Calculator.module.scss';
import CustomSelect from '../../ui/custom_select/CustomSelect';
import GreenButton from '../../ui/green_button/GreenButton';

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
  const [estimate, setEstimate] = useState(0);

  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    resetProp(props.preSetProperty);
  }, [props.preSetProperty]);

  useEffect(() => {
    resetSubscript(props.preSetSubscript);
  }, [props.preSetSubscript]);

  useEffect(() => {
    resetPlan(props.presetPlan);
  }, [props.presetPlan]);

  useEffect(() => {
    console.log('setEstimate');
    setEstimate(
      Number(
        propsPlansList[presetProp][presetPlan].subscriprion[presetSubscript]
      ) * footage
    );
  }, [presetPlan, presetProp, presetSubscript, footage])

  const changeHandler = (name: string, value: string) => {
    switch (name) {
      case 'prop_type':
        resetProp(value as PropType);
        break;
      case 'service_subscription':
        resetSubscript(value as subscriptionTypes);
        break;
      case 'planType':
        resetPlan(value as Plans);
    }
  };

  return (
    <form>
      <div className="flex flex-grow gap-16">
        <div className="basis-full">
          <p className={`${classes.inputRow} ${classes.title} flex`}>
            Estimate
          </p>
          <div className={`${classes.inputRow} flex`}>
            <p className={`${classes.label}`}>Property type</p>
            <CustomSelect
              options={Object.keys(Properties)}
              selected={presetProp}
              onChange={(val: string) => changeHandler('prop_type', val)}
            ></CustomSelect>
          </div>
          <div className={`${classes.inputRow} flex`}>
            <p className={`${classes.label}`}>Service type</p>
            <CustomSelect
              options={Object.keys(subscriptions)}
              selected={presetSubscript}
              onChange={(val: string) =>
                changeHandler('service_subscription', val)
              }
            ></CustomSelect>
          </div>
          <div className={`${classes.inputRow} flex`}>
            <p className={`${classes.label}`}>Total footage</p>
            <input
              name="footage"
              id="footage"
              type="number"
              min={0}
              max={9999}
              placeholder="0"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                resetFootage(Number(e.currentTarget.value))
              }
            ></input>
          </div>
          <div className={`${classes.inputRow} flex`}>
            <p className={`${classes.label}`}>Plan</p>
            <CustomSelect
              options={Object.keys(Plan)}
              selected={presetPlan}
              onChange={(val: string) => changeHandler('planType', val)}
            ></CustomSelect>
          </div>
          <div className={`${classes.inputRow} flex`}>
            <label className={`${classes.label}`} htmlFor="date">
              Date and time
            </label>
            <input id="date" name="date" type="date"></input>
          </div>
          <hr className={`${classes.inputRow} flex`} />
          <p>
            Estimate total:
            {`${estimate} CAD`}
          </p>
        </div>
        <div className="basis-1/3">
          <p className={` ${classes.title}`}>Contact information</p>
          <div>
            <input
              ref={fNameRef}
              type="text"
              id="f-name"
              placeholder="First name"
            ></input>
          </div>
          <div>
            <input
              ref={lNameRef}
              type="text"
              id="l-name"
              placeholder="Last name"
            ></input>
          </div>
          <div>
            <input
              ref={phoneRef}
              type="number"
              placeholder="1(xxx)xxx-xx-xx"
              id="phone"
            ></input>
          </div>
          <div>
            <input
              ref={emailRef}
              type="text"
              placeholder="your-email@hosting.com"
              id="email"
            ></input>
          </div>
        </div>
      </div>
      <div className={`${classes.buttonWrap}`}>
        <GreenButton>
          {<input value={'Request cleaning'} type="submit"></input>}
        </GreenButton>
      </div>
    </form>
  );
}

export default Calculator;
