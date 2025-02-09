import React from 'react';
import SimpleContainer from './SimpleContainer';
import { Typography, Box, Link } from '@mui/material';

export const JoinUs = () => {
  return (
    <Box sx={{ backgroundColor: '#FFE8E8', py: 6, pb: 8 }}> 
      <SimpleContainer>
        <header>
          <Typography 
            variant="h4" 
            sx={{ 
              textAlign: 'center', 
              fontSize: '2.5rem', 
              fontWeight: '600', 
              color: 'rgb(54, 54, 54)', 
              mb: 3 
            }}
          >
            Join Us
          </Typography>
        </header>

        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            fontSize: '1.1rem', 
            color: 'rgb(80, 80, 80)', 
            maxWidth: '700px', 
            mx: 'auto', 
            lineHeight: 1.6,
            px: 3,
            mb: 4
          }}
        >
          Become part of UTASR and contribute to the future of autonomous technology. 
          We welcome passionate individuals eager to collaborate on cutting-edge projects, 
          explore innovative ideas, and make an impact in the field of robotics and AI.
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            fontSize: '1.1rem', 
            color: 'rgb(80, 80, 80)', 
            maxWidth: '700px', 
            mx: 'auto', 
            mt: 2,
            px: 3,
            mb: 4 
          }}
        >
          Have questions? Reach out to us at  
          <Link 
            href="mailto:info@utasr.ca" 
            sx={{ 
              color: 'rgb(54, 54, 54)', 
              fontWeight: 'bold', 
              marginLeft: '5px',
              '&:hover': { color: 'rgb(30, 30, 30)' }
            }}
          >
            info@utasr.ca
          </Link>.
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            fontSize: '1.1rem', 
            color: 'rgb(80, 80, 80)', 
            maxWidth: '700px', 
            mx: 'auto', 
            mt: 3,
            px: 3,
            mb: 4 
          }}
        >
          Connect with us and stay updated by joining our community on Discord!
        </Typography>

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Link 
            href="https://discord.gg/YOUR_DISCORD_LINK" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ 
              fontSize: '1.2rem', 
              fontWeight: '600', 
              color: 'rgb(54, 54, 54)', 
              '&:hover': { color: 'rgb(30, 30, 30)' } 
            }}
          >
            Join Our Discord
          </Link>
        </Box>
      </SimpleContainer>
    </Box>
  );
}

export default JoinUs;
