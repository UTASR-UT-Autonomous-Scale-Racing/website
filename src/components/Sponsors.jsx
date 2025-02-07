import React from 'react';
import SimpleContainer from './SimpleContainer';
import { Box, Typography, Grid2 } from '@mui/material';
import sponsor from '../assets/sponsor4.jpeg';

export const Sponsors = () => {
  const sponsorImages = [sponsor, sponsor, sponsor, sponsor, sponsor, sponsor] // Insert Image here #######

  return (
    <div style={{ padding: '100px 0px' }}>
      <SimpleContainer bgColor="#fffff">
        <Typography variant="h2" style={{ textAlign: 'center', fontSize: '2rem' }}>
          Sponsors
        </Typography>
        <Typography variant="body1" style={{ textAlign: 'center', padding: '0px 20px' }}>
          We are grateful for the generous support of our sponsors. Their contributions help us to develop innovative projects,
          host engaging events, and foster a community of learning and collaboration.
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
                    height: '300px',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease',
                    backgroundColor: 'black',
                  }}
                  src={image}
                  alt={`Sponsor ${index + 1}`}
                />
              </Grid2>
            ))}
          </Grid2>
        </Box>

        <Typography variant="body1" style={{ textAlign: 'center', padding: '0px 20px' }}>
          Interested in partnering with UTASR? Join us on this exciting journey! Contact us to explore sponsorship opportunities and contribute to the future of autonomous technology.
        </Typography>
      </SimpleContainer>
    </div>
  );
};

export default Sponsors;