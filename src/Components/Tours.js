import React from 'react';
import Title from './Title';
import { featuredTours } from '../Datalinks';

function Tours() {
  return (
    <>
      <section className='section' id='tours'>
        <Title first='Featured' second='tours' />

        <div className='section-center featured-center'>
          {featuredTours.map((tour) => {
            const { id, img, date, title, details, location, duration, price } =
              tour;
            return (
              <article className='tour-card' key={id}>
                <div className='tour-img-container'>
                  <img src={img} className='tour-img' alt='' />
                  <p className='tour-date'>{date}</p>
                </div>
                <div className='tour-info'>
                  <div className='tour-title'>
                    <h4>{title}</h4>
                  </div>
                  <p>{details}</p>
                  <div className='tour-footer'>
                    <p>
                      <span>
                        <i className='fas fa-map'></i>
                      </span>{' '}
                      {location}
                    </p>
                    <p>{duration}</p>
                    <p>from Php{price}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Tours;
