import React from 'react';
import classes from './MainMenuList.module.scss';

import MainMenuItem from './MainMenuItem';

function MainMenuList() {
  return (
    <nav className={`${classes.mainMenuList_general} flex`}>
      <MainMenuItem itemText="Services" />
      <MainMenuItem itemText="About us" />
      <MainMenuItem itemText="Contacts" />
    </nav>
  );
}

export default MainMenuList