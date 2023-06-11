import React from 'react';
import Title from './Title';
import { ourServices } from '../Datalinks';

function Services() {
  return (
    <>
      <section className='section services' id='services'>
        <Title first='our' second='services' />
        <div className='section-center services-center'>
          {ourServices.map((details) => {
            const { id, icon, service, description } = details;
            return (
              <article className='service' key={id}>
                <span className='service-icon'>
                  <i className={icon}></i>
                </span>
                <div className='service-info'>
                  <h4 className='service-title'>{service}</h4>
                  <p className='service-text'>{description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Services;
