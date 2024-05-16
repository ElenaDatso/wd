import React from 'react';
import classes from './MainMenuItem.module.scss';

function MainMenuItem(props: {itemText: string; itemLink?: string}) {
  return (
    <div
      className={`${classes.mainMenuItem_general} hidden tab:flex items-center relative`}
    >
      <a href={props.itemLink || '#'}>{props.itemText}</a>
    </div>
  );
}

export default MainMenuItem;
