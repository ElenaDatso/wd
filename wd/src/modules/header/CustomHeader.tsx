import React from 'react';
import MailMenuList from '../nav_bar/MainMenuList';
import SocialIconsBar from '../social_bar/SocialIconsBar';
import Hamburg from '../hamburger/Hamburg';
import classes from './CustomHeader.module.scss';

function CustomHeader() {
  return (
    <header className={`${classes.header_general}`}>
      <div className={`${classes.header_wrap} flex`}>
        <div
          className={`${classes.header_textLogo} hidden mobile:flex flex-col justify-center`}
        >
          <a href="#">BUZZY BEE</a>
        </div>
        <div className={`flex justify-between items-center w-full`}>
          <MailMenuList></MailMenuList>
          <SocialIconsBar></SocialIconsBar>
          <Hamburg className="inline-block tab:hidden" />
        </div>
      </div>
    </header>
  );
}

export default CustomHeader;