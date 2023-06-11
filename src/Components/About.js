import React from 'react';
import aboutImg from '../images/about.jpg';
import Title from './Title';

function About() {
  return (
    <>
      <section className='section' id='about'>
        <Title first='about' second='us' />

        <div className='section-center about-center'>
          <div className='about-img'>
            <img src={aboutImg} className='about-photo' alt='awesome beach' />
          </div>
          <article className='about-info'>
            <h3>exploring the pearl of the orient</h3>
            <p>
              Join us, as we embark to affordable adventures in the breathtaking
              Philippines! Explore pristine beaches, historic streets, and
              delicious cuisine while connecting with warm-hearted locals.
            </p>
            <p>
              Our sustainable travel practices ensure we "leave nothing but
              footprints" as we preserve the natural beauty and support local
              communities. From the stunning rice terraces of Banaue to the
              captivating beaches of Palawan, we have something for everyone. .
              Discover the true essence of this stunning archipelago with us.
            </p>
            <a href='#home' className='btn'>
              read more
            </a>
          </article>
        </div>
      </section>
    </>
  );
}

export default About;
