import React from 'react';
import SimpleContainer from './SimpleContainer';

export const Sponsors = () => {
  return (
    <div style={{padding: '100px 0px'}}>
    <SimpleContainer bgColor="#fffff">
      <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Sponsors</h2>
      <p style={{ textAlign: 'center', padding: '0px 20px' }}>
        We are grateful for the generous support of our sponsors. Their contributions help us to develop innovative projects, 
        host engaging events, and foster a community of learning and collaboration. 
      </p>
      <p style={{ textAlign: 'center', padding: '0px 20px' }}>
      Interested in partnering with UTASR? Join us on this exciting journey! Contact us to explore sponsorship opportunities and contribute to the future of autonomous technology.
      </p>


    </SimpleContainer>
    </div>
  );
}

export default Sponsors;