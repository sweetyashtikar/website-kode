import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/about_bg.webp';


const about = () => {
  return (
    <Section id='about'>
      <div
        className='about-container'
        style={{ backgroundImage: `url(${bgImage})` }}
      >

        <div className='container pt-2 pb-5'>
          <div className='section-header pt-5 pb-5 text-center'>
            <h3 className='section-title'>
              <span>Our </span>Company
            </h3>

            <h1 className='intro container text-center '>
              <h1>Creative Minds Behind Kodegurus</h1>
            </h1>
          </div>
          <div className='section-content'>
            <div className='row'>
              <h3 className='intro container text-center '><h1>About us</h1></h3>
              <div className='about-description'>
                <h4>
                  We Just not lucky to have a team like this but they are everything for the organization.
                  At Kodegurus, our Creative Minds don’t miss a single opportunity to impress our clients.
                </h4>


                <div className='section-content-body'>
                  <div className='row'>
                    <h3 className='about-title text-left'><h1>Reena </h1> </h3>
                    <div className='about-description-body'>
                      <h4> SEO Executive </h4>

                    </div>
                  </div>

                  <div className='row'>
                    <h3 className='about-title'><h1>Jaspal Singh </h1> </h3>
                    <div className='about-description-body'>
                      <h4> Team Leader </h4>

                    </div>
                  </div>

                  <div className='row'>
                    <h3 className='about-title'><h1>Navdeep Singh </h1> </h3>
                    <div className='about-description-body'>
                      <h4> Web Developer </h4>

                    </div>
                  </div>

                  <div className='row'>
                    <h3 className='about-title'><h1>Nikhil shishodia </h1> </h3>
                    <div className='about-description-body'>
                      <h4> Business Development Executive & Content Writer </h4>

                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
