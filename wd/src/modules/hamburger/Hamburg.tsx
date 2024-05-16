import React, {useState} from 'react';
import classes from './Hamburg.module.scss';

function Hamburger(props: {className?: unknown}) {
  const [active, setActive] = useState(false);
  const onHamburgListener = () => {
    setActive(!active);
  }
  return (
    <div className={`${classes['hamburger']} ${classes['hamburger--squeeze']} ${active ? classes['is-active'] : ''} ${props.className ? props.className : ''}`} onClick={onHamburgListener}>
      <div className={`${classes['hamburger-box']}`}>
        <div
          className={`${classes['hamburger-inner']}`}
        ></div>
      </div>
    </div>
  );
}

export default Hamburger;