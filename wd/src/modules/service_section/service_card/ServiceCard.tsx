import React from 'react';
import classes from './ServiceCard.module.scss';
import ButtonPaint from '../../button_paint_animation/ButtonPaint';

function ServiceCard(props: {
  imgUrl: string;
  altText: string;
  serviceName: string;
  serviceDescript: string;
}) {
  return (
    <div className={`${classes['serviceCard']} relative`}>
      <img
        src={`${props.imgUrl}`}
        alt={`${props.altText}`}
        className={`${classes['serviceCard_image']}`}
      />
      <div className={`${classes['textBlock']}`}>
        <div className={`${classes['textBlock_inner']}`}>
          <h2 className={classes['textBlock_serviceName']}>
            {props.serviceName}
          </h2>
          <p className={`${classes['textBlock_serviceDescript']}`}>
            {props.serviceDescript}
          </p>
          <div className={classes['button_wrap']}>
            <ButtonPaint itemText={'Learn more'}></ButtonPaint>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
