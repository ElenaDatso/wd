import React from 'react';
import ServiceCard from './service_card/ServiceCard';
import classes from './ServiceSection.module.scss';
import services from '../../images/jpg/services';

function ServiceSection() {
  return (
    <section className={`${classes.serviceSection} relative`}>
      <h2 className={`${classes['serviceSection_title']}`}>Our services</h2>
      <div
        className={`${classes.serviceSection_inner} grid laptop:grid-cols-2	`}
      >
        <ServiceCard
          imgUrl={services.livingRoom}
          altText={'living Room'}
          serviceName={'living room'}
          serviceDescript={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut animi, porro eligendi aperiam vel laboriosam tempore. Sit voluptatum illo non facilis similique, qui, nisi beatae eaque harum, velit earum exercitationem.'
          }
        />
        <ServiceCard
          imgUrl={services.bedroom}
          altText={'bedroom'}
          serviceName={'Bedroom'}
          serviceDescript={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut animi, porro eligendi aperiam vel laboriosam tempore. Sit voluptatum illo non facilis similique, qui, nisi beatae eaque harum, velit earum exercitationem.'
          }
        />
        <ServiceCard
          imgUrl={services.bathroom}
          altText={'bathroom'}
          serviceName={'Bathroom'}
          serviceDescript={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut animi, porro eligendi aperiam vel laboriosam tempore. Sit voluptatum illo non facilis similique, qui, nisi beatae eaque harum, velit earum exercitationem.'
          }
        />
        <ServiceCard
          imgUrl={services.kitchen}
          altText={'kitchen'}
          serviceName={'Kitchen'}
          serviceDescript={
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut animi, porro eligendi aperiam vel laboriosam tempore. Sit voluptatum illo non facilis similique, qui, nisi beatae eaque harum, velit earum exercitationem.'
          }
        />
      </div>
    </section>
  );
}

export default ServiceSection;
