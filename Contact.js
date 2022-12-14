import React from 'react';

import Section from '../../../HOC/Section';

const contact = () => {

  return (
    <Section id='contact'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Contact </span>Us
          </h3>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='Enter Name...'
                  />
                  <br />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='Enter email...'
                  />
                  <br />

                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control rounded-0'
                    rows='5'
                    placeholder='Enter Message...'
                  />
                  <br />

                </div>
                <div className='form-group text-center'>
                  <button className='btn btn-block btn-primary rounded-0 mr-auto ml-auto'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default contact;
