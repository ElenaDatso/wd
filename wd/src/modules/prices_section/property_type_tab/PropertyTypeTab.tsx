import React from 'react';
import classes from './ProppertyTypeTab.module.scss';
import { PropType } from '../../../libs/types/propety';
import {PropertyTabInfoType} from '../../../libs/interfaces'

interface Tab extends PropertyTabInfoType {
  onChooseTab: (tabText: PropType) => void;
  position: 'left' | 'right';
}

function PropertyTypeTab(props: Tab) {

  const onClickHandler = (tabText: PropType) => {
    props.onChooseTab(tabText);
  }

  return (
    <div
      className={`${classes.tabWrap_wrap} flex items-center relative w-1/2`}
      onClick={() => onClickHandler(props.tabText)}
    >
      <div
        className={`${classes.tabWrap_tab} ${props.isActive ? classes.tabWrap_tab__isActive : ''} ${props.position === 'right' ? classes.tabWrap_tab__isActive__left : ''} flex items-center gap-4 w-full`}
      >
        <props.tabicon />
        <span>{props.tabText}</span>
      </div>
    </div>
  );
}

export default PropertyTypeTab;