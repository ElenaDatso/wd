import React from 'react';
import SocialIconItem from './SocialIconItem';
import { FaFacebookF, FaTwitter, FaInstagram, FaVimeoV } from 'react-icons/fa';

function SocialIconsBar() {
  return (
      <ul className='hidden tab:flex'>
        <SocialIconItem linkText="">
          <FaFacebookF />
        </SocialIconItem>
        <SocialIconItem linkText="">
          <FaTwitter />
        </SocialIconItem>
        <SocialIconItem linkText="">
          <FaInstagram />
        </SocialIconItem>
        <SocialIconItem linkText="">
          <FaVimeoV />
        </SocialIconItem>
      </ul>
  );
}

export default SocialIconsBar