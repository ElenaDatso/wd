import React from 'react';
import classes from './GreenButton.module.scss';

function GreenButton(props: { itemText: string }) {
  return (
    <button
      className={`${classes.GreenButton_general}`}
    >
      <div className={`${classes.GreenButton_button}`}>
        <span className={`${classes.GreenButton_span}`}>
          {props.itemText}
        </span>
      </div>
    </button>
  );
}

export default GreenButton;
