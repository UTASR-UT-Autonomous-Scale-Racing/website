import React from 'react';
import SimpleContainer from './SimpleContainer';
import '../styles/AboutUs.css';
import { Box, Typography } from '@mui/material';

export const AboutUs = () => {
  return (
    <Box
      className='about-us'
      color='white'
      backgroundColor='#2d48a6'
      sx={{
        padding: '100px 0px',
        fontFamily: 'Poppins, sans-serif', // Set global font
      }}
    >
      <SimpleContainer>
        <header>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontSize: '2.5rem',
              fontWeight: '600',
              color: 'white',
              mb: 3,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Our Team
          </Typography>
        </header>

        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          sx={{ padding: '100px 0px', mb: 4 }}
        >
          {[...Array(5)].map((_, index) => (
            <Box
              key={index}
              className="team-member hover-card"
              textAlign="center"
              margin={{ sx: "0px", md: "20px 0px" }}
              width={{ xs: '50%', sm: '50%', md: '33.33%' }}
              sx={{
                transition: 'transform 0.2s, box-shadow 0.2s',
                fontFamily: 'Poppins, sans-serif',
                '&:hover': {
                  transform: 'translateY(-10px) scale(1.03)',
                  boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
                  cursor: 'pointer',
                },
              }}
            >
              <Box
                color="white"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <img
                  style={{ margin: "25px 0px" }}
                  src="https://img.freepik.com/premium-photo/diversity-race-ethnicity-people-concept-international-group-happy-smiling-men-women-showing-thumbs-up-white_380164-164822.jpg"
                  alt="Web Dev Team"
                  className="member-image"
                />
                <Typography
                  fontSize={{ sx: "1.5rem", md: "1.8rem" }}
                  sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                >
                  Team Member {index + 1}
                </Typography>
                <Typography
                  width="80%"
                  fontSize={{ sx: "1.2rem", md: "1.5rem" }}
                  sx={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Description for team member {index + 1}.
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <header>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontSize: '2.5rem',
              fontWeight: '600',
              color: 'white',
              mb: 5,
              textDecoration: 'underline',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Divisions
          </Typography>
        </header>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          width="100%"
        >
          <Box
            className="team-member hover-card"
            textAlign="center"
            margin={{ sx: "10px 0px", md: "40px 20px" }}
            width={{ xs: "100%", md: "48%" }}
            sx={{
              transition: 'transform 0.2s, box-shadow 0.2s',
              fontFamily: 'Poppins, sans-serif',
              '&:hover': {
                transform: 'translateY(-10px) scale(1.03)',
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
                cursor: 'pointer',
              },
            }}
          >
            <Box
              color="white"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Typography
                fontSize={{ sx: "1.5rem", md: "1.8rem" }}
                sx={{
                  textDecoration: "underline",
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                }}
              >
                Software Team
              </Typography>
              <Typography
                width="80%"
                fontSize={{ sx: "1.2rem", md: "1.5rem" }}
                sx={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Develops AI-driven control systems using deep learning and computer vision. Focuses on real-time perception, sensor fusion, path planning, and performance optimization for autonomous racing.
              </Typography>
            </Box>
          </Box>

          <Box
            className="team-member hover-card"
            textAlign="center"
            margin={{ sx: "10px 0px", md: "40px 20px" }}
            width={{ xs: "100%", md: "48%" }}
            sx={{
              transition: 'transform 0.2s, box-shadow 0.2s',
              fontFamily: 'Poppins, sans-serif',
              '&:hover': {
                transform: 'translateY(-10px) scale(1.03)',
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
                cursor: 'pointer',
              },
            }}
          >
            <Box
              color="white"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Typography
                fontSize={{ sx: "1.5rem", md: "1.8rem" }}
                sx={{
                  textDecoration: "underline",
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                }}
              >
                Hardware Team
              </Typography>
              <Typography
                width="80%"
                fontSize={{ sx: "1.2rem", md: "1.5rem" }}
                sx={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Designs and builds high-performance vehicle systems, including chassis, aerodynamics, sensors, and embedded electronics. Integrates hardware for low-latency control and efficient power management.
              </Typography>
            </Box>
          </Box>
        </Box>
      </SimpleContainer>
    </Box>
  );
}

export default AboutUs;