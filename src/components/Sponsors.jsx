import React from 'react';
import SimpleContainer from './SimpleContainer';
import { Box, Typography, Grid2 } from '@mui/material';
import affiliate1 from '../assets/skule_crest.png';
import affiliate2 from '../assets/CSC.png';
import affiliate3 from '../assets/skule-logo-white.svg';


export const Sponsors = () => {
  const sponsorImages = [affiliate1, affiliate2, affiliate3]; // Insert Image here

  return (
    <div style={{ padding: '100px 0', backgroundColor: 'rgb(54, 54, 54)' }}>
      <SimpleContainer bgColor="rgb(54, 54, 54)">
        <Typography 
          variant="h4" 
          sx={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            fontWeight: '600', 
            color: 'white',
            mb: 2
          }}
        >
          Our Sponsors
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            fontSize: '1.1rem', 
            lineHeight: 1.6, 
            maxWidth: '800px', 
            margin: '0 auto', 
            color: 'white',
            px: 3,
            mb: 4
          }}
        >
          We are grateful for the generous support of our sponsors. Their contributions enable us to develop innovative projects, host engaging events, and foster a thriving community of learning and collaboration.
        </Typography>

        <Box sx={{ p: 4 }}>
          <Grid2 container spacing={3} justifyContent="center">
            {sponsorImages.map((image, index) => (
              <Grid2 
                key={index} 
                xs={6}   
                sm={4}
                md={3}  
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 2
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: '150px',
                    padding: '10px',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease-in-out',
                    backgroundColor: 'rgb(54, 54, 54)',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    }
                  }}
                  src={image}
                  alt={`Sponsor ${index + 1}`}
                />
              </Grid2>
            ))}
          </Grid2>
        </Box>

        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            fontSize: '1.1rem', 
            fontWeight: 500, 
            maxWidth: '700px', 
            margin: '0 auto', 
            lineHeight: 1.6, 
            color: 'white',
            px: 3
          }}
        >
          Interested in partnering with UTASR? Join us on this exciting journey! Contact us to explore sponsorship opportunities and contribute to the future of autonomous technology.
        </Typography>
      </SimpleContainer>
    </div>
  );
};


export default Sponsors;