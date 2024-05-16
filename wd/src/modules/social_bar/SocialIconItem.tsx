import React, { ReactNode } from 'react';
import classes from './SocialIconItem.module.scss';

function SocialIconItem(props: { linkText: string; children: ReactNode}) {
  return (
    <li className={`${classes['iconItem']} relative`}>
      <a
        className={`${classes['iconItem_link']} relative`}
        href={`${props.linkText}`}
      >
        {props.children}
      </a>
    </li>
  );
}

export default SocialIconItem