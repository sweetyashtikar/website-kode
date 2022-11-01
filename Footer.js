import React from 'react';

import Link from '../Link/Link';

const footer = () => {
  return (
    <footer className=''>
      <div className='container text-light pt-5'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-5 mb-'>
            <div className='footer-title'>
              <h6>About Us</h6>
            </div>
            <div className='footer-content'>
              <p><small className='text-muted'>
                  Kodegurus is a digital Marketing company based in Chandigarh. We aim to provides the
                  best services to our clients. From website development to Social Media Marketing,
                  Content Marketing and complete SEO package, contact us. We are there for you always!
                  <br/><br/>
                  visit us:
                  Sebiz Square 5th floor,IT Park
                  Sector 67, SAS Nagar
                  Mohali, 160062
                  India
                </small>
               
              </p>
              <button className='btn btn-sm btn-primary rounded-0'>
                Learn more
              </button>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Quick Links</h6>
            </div>
            <div className='footer-content'>
              <ul className='list-group quick-links'>
                <li>
                  <Link target='home' offset={120}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link target='about'>About</Link>
                </li>
                <li>
                  <Link target='services'>Services</Link>
                </li>
                <li>
                  <Link target='blog'>Blog</Link>
                </li>
                <li>
                  <Link target='contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
            <div className='footer-title'>
              <h6>Contact Us</h6>
            </div>
            <div className='footer-content'>
              <p className='text-muted'>
                <small>Address : Sebiz Square 5th floor,IT Park
                  Sector 67, SAS Nagar
                  Mohali, 160062
                  India</small>
              </p>
              <p className='text-muted'>
                <small>Phone : +091 (0) 123 456 789</small>
              </p>
              <p className='text-muted'>
                <small>E-mail : Kodegurus@email.com</small>
              </p>
              <div className='social-media mt-4'>
                <a href='!#' className='text-light'>
                  <i className='fab fa-facebook-f mr-4' />
                </a>
                <a href='!#' className='text-light'>
                  <i className='fab fa-twitter mr-4' />
                </a>
                <a href='!#' className='text-light'>
                  <i className='fab fa-instagram mr-4' />
                </a>
                <a href='!#' className='text-light'>
                  <i className='fab fa-github' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer pt-3 pb-3 text-center'>
        <small>Copyright © 2022 Kodegurus | Powered by Kodegurus</small>
      </div>
    </footer>
  );
};

export default footer;
