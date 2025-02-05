import React from 'react';
import SimpleContainer from './SimpleContainer';
import '../styles/AboutUs.css';
export const AboutUs = () => {
  return (
  <div className='about-us' style={{padding: '100px 0px'}}>
    <SimpleContainer >
      <header>
        <h1 style={{ fontSize: '3rem', textAlign:'center' }}>Our Team</h1>
      </header>

      <div className="flex-container">
      <div className="team-member">
        <img src="https://img.freepik.com/premium-photo/diversity-race-ethnicity-people-concept-international-group-happy-smiling-men-women-showing-thumbs-up-white_380164-164822.jpg" 
          alt="Web Dev Team" className="team-image" />
        <p>Web Dev Team</p>
      </div>
      <div className="team-member">
        <img src="https://img.freepik.com/premium-photo/diversity-race-ethnicity-people-concept-international-group-happy-smiling-men-women-showing-thumbs-up-white_380164-164822.jpg" 
          alt="AA Team" className="team-image" />
        <p>AA Team</p>
      </div>
      <div className="team-member">
        <img src="https://img.freepik.com/premium-photo/diversity-race-ethnicity-people-concept-international-group-happy-smiling-men-women-showing-thumbs-up-white_380164-164822.jpg" 
          alt="Hardware Team" className="team-image" />
        <p>Hardware Team</p>
      </div>

      <style jsx>{`
        
      `}</style>
      </div>
    </SimpleContainer>
    </div>
  );
}

export default AboutUs;