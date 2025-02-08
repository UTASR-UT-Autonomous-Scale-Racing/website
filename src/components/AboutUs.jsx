import React from 'react';
import SimpleContainer from './SimpleContainer';
import '../styles/AboutUs.css';
import { Box, Typography } from '@mui/material';
export const AboutUs = () => {
  return (
    <Box className='about-us' color='white' backgroundColor='#2d48a6' sx={{ padding: '100px 0px' }}>
      <SimpleContainer>
        <header>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontSize: '2.5rem',
              fontWeight: '600',
              color: 'white',
              mb: 3
            }}
          >
            Our Team
          </Typography>
        </header>

        <Box display="flex" justifyContent="center" flexDirection={{ xs: 'column', md: 'row' }}>
          <Box className="team-member" textAlign="center" sx={{margin: '40px 20px' }}  width={{xs:'100%', md:'45%'}}>
            
            <Box color="white" display="flex" flexDirection="column" alignItems="center" justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <img style={{margin: "25px 0px"}} src="https://img.freepik.com/premium-photo/diversity-race-ethnicity-people-concept-international-group-happy-smiling-men-women-showing-thumbs-up-white_380164-164822.jpg"
              alt="Web Dev Team" className="team-image" />
              <Typography variant='p'  fontSize={{sx:"1.5rem", md:"3rem"}}>Hardware Team</Typography>

              <Typography width="80%"  fontSize={{sx:"1.2rem", md:"1.5rem"}}>Handles mechanical design, aerodynamics, electronics, and firmware. Works on CAD modeling, PCB design, sensor integration, and real-time control.
                </Typography>
            </Box>
          </Box>
          <Box className="team-member" textAlign="center" sx={{margin: '40px 20px' }} width={{xs:'100%', md:'45%'}}>
          <Box color="white" display="flex" flexDirection="column" alignItems="center" justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <img style={{margin: "25px 0px"}} src="https://img.freepik.com/premium-photo/diversity-race-ethnicity-people-concept-international-group-happy-smiling-men-women-showing-thumbs-up-white_380164-164822.jpg"
              alt="Web Dev Team" className="team-image" />
              <Typography variant='p' fontSize={{sx:"1.5rem", md:"3rem"}}>Software Team</Typography>

              <Typography width="80%"  fontSize={{sx:"1.5rem", md:"1.5rem"}}>Focuses on data processing, machine learning, and system optimization. Cleans and preprocesses sensor data, builds AI models, 
                and optimizes real-time performance.
                </Typography>
            </Box>
          </Box>
        </Box>
      </SimpleContainer>
    </Box>
  );
}

export default AboutUs;