import React, { ReactNode } from 'react';
import classes from './GreenButton.module.scss';

function GreenButton(props: { children: ReactNode }) {
  return (
    <button
      className={`${classes.GreenButton_general}`}
    >
      <div className={`${classes.GreenButton_button}`}>
          {props.children}
      </div>
    </button>
  );
}

export default GreenButton;
