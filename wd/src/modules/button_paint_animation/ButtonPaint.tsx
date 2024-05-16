import React from 'react';
import classes from './ButtonPaint.module.scss';

function ButtonPaint(props: { itemText: string }) {
  return (
    <div className={`${classes.buttonWrap_general} flex items-center relative`}>
      <span className={`${classes.buttonWrap_spanMask}`}>{props.itemText}</span>
      <div className={`${classes.buttonWrap_button}`}>
        <a href={'#'}>{props.itemText}</a>
      </div>
    </div>
  );
}

export default ButtonPaint;
