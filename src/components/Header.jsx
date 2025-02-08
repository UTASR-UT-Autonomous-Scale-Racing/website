import React from 'react';
import SimpleContainer from './SimpleContainer';
import headerimage from '../assets/headerimage.png'; 
import { Box, Typography } from '@mui/material';

export const Header = () => {
  return (
    <SimpleContainer color={'white'} >
      <Box
        sx={{
          width: '100%',
          height: '93vh',
          position: 'relative',
          background: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(22,46,124,1) 62%, rgba(82,118,240,1) 100%)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          '&::before': {
            content: '""', 
            position: 'absolute', 
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${headerimage})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)', // Gradient mask for opacity
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)', // For Safari
            zIndex: 1, 
          },
        }}
      >
        <Box
          sx={{
            position: 'relative', 
            zIndex: 2, 
            color: 'white', 
            textAlign: 'start',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center', // Center vertically
            height: '100%',
            width: '100%',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            fontSize: { xs: 24, md: "60px" },
            ml: { xs: 3, sm: 5, md: 10 }, // Left margin increases with screen size
            p: {
              xs: 3,
              sm: 5,
              md: 10
            }
          }}
        >


          <img src={'svg/White logo - no background.svg'} alt="UTASR" style={{ height: '150px', marginBottom: '16px' }} />
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold' }}>
            University of Toronto <br/>
            Autonomous Scale Racing <br />
          </Typography>
        </Box>
      </Box>
    </SimpleContainer>
  );
};
