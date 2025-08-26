import React from 'react';
import headerimage from '../assets/headerimage.png';
import { Box, Typography } from '@mui/material';

export const Header = () => {
  return (
    // Full-bleed section (no SimpleContainer)
    <Box
      component="section"
      sx={{
        width: '100vw',                   // stretch to viewport width
        mx: 'calc(50% - 50vw)',           // pull flush to both edges (no gutters)
        height: '94vh',                   // keep your old height
        position: 'relative',
        overflow: 'hidden',

        // your blue gradient
        background:
          'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(22,46,124,1) 62%, rgba(82,118,240,1) 100%)',

        // photo layer
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${headerimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
          zIndex: 1,
        },
      }}
    >
      {/* Text/Logo block (unchanged) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '25px', sm: '25px' },
          right: 0,
          zIndex: 2,
          color: 'white',
          textAlign: 'start',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
          fontSize: { xs: 24, md: '60px' },
          ml: { xs: 3, sm: 5, md: 10 },
          p: { xs: 3, sm: 5, md: 10 },
        }}
      >
        <Box
          component="img"
          src={'svg/White logo - no background-cropped.svg'}
          alt="UTASR Emblem"
          sx={{ height: 150, mb: 2 }}
        />
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 'bold',
            ml: 1,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem', lg: '3rem' },
          }}
        >
          University of Toronto
          <br />
          Autonomous Scale Racing
          <br />
        </Typography>
      </Box>
    </Box>
  );
};

