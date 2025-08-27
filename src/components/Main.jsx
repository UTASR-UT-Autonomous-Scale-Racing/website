import React from 'react';
import SimpleContainer from './SimpleContainer';
import car from '../assets/hero2.jpg';
import { Box, Typography, Button, Stack, Link } from '@mui/material';

export const Main = () => {
  return (
    <Box
      component="section"
      id="main"
      sx={{
        bgcolor: '#fff',
        color: '#0f172a',
        pt: { xs: 6, md: 8 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <SimpleContainer>
        {/* Heading block (mirrors About/Sponsors structure) */}
        <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 } }}>
          <Typography variant="overline" sx={{ letterSpacing: '0.15em', opacity: 0.55 }}>
            University of Toronto Autonomous Scale Racing
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 750, letterSpacing: '-0.02em', mb: 1 }}>
            Welcome to UTASR
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 860, mx: 'auto', opacity: 0.8 }}>
            Building scalable autonomy on RC platforms through hands-on engineering, research, and competition.
          </Typography>
        </Box>

        {/* Content: text + image (responsive split) */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr 1fr' },
            gap: { xs: 3, md: 6 },
            alignItems: 'center',
            maxWidth: 1400,
            mx: 'auto',
          }}
        >
          {/* Left: copy */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: '-0.01em', mb: 1 }}>
              Who we are
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.85, mb: 1.5, lineHeight: 1.7 }}>
              <strong>University of Toronto Autonomous Scale Racing (UTASR)</strong> is a design team focused on
              developing scalable, learning-based algorithms for racing. We emphasize accessible projects,
              fast iteration, and real-world testing so members gain practical engineering skills.
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.85, mb: 1.5, lineHeight: 1.7 }}>
              We host workshops, collaborative builds, and on-track testing to foster a community of innovation across
              software and hardware disciplines.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '-0.01em', mt: 2, mb: 1 }}>
              Our Objectives
            </Typography>
            <Box
              component="ul"
              sx={{
                pl: 3,
                mb: 0,
                '& li': { mb: 0.75, lineHeight: 1.7, opacity: 0.9 },
                listStyle: 'disc',
              }}
            >
              <li>Develop high-performance control strategies for autonomous racing.</li>
              <li>Foster collaboration and learning among students.</li>
              <li>Compete and excel in autonomous racing competitions.</li>
            </Box>

            {/* CTAs */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              sx={{ mt: 2.75 }}
              alignItems={{ xs: 'stretch', sm: 'center' }}
            >
              <Button
                component={Link}
                href="#events"
                variant="contained"
                sx={{
                  textTransform: 'none',
                  fontWeight: 700,
                  px: 2.25,
                  py: 1,
                  borderRadius: 2,
                  color: '#fff',
                  background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                  boxShadow: '0 8px 22px rgba(30,64,175,0.25)',
                  '&:hover': { boxShadow: '0 12px 28px rgba(30,64,175,0.35)', transform: 'translateY(-1px)' },
                }}
              >
                See Events
              </Button>
              <Button
                component={Link}
                href="#join-us"
                variant="outlined"
                sx={{
                  textTransform: 'none',
                  fontWeight: 700,
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  color: '#0f172a',
                  borderColor: 'rgba(15,23,42,0.3)',
                  '&:hover': { borderColor: '#0f172a', backgroundColor: 'rgba(15,23,42,0.04)' },
                }}
              >
                Join Us
              </Button>
            </Stack>
          </Box>

          {/* Right: glassy image panel */}
          <Box
            className="hover-lift"
            sx={{
              borderRadius: 3,
              p: { xs: 1.5, md: 2 },
              background: 'linear-gradient(180deg, rgba(15,23,42,0.04), rgba(15,23,42,0.02))',
              backdropFilter: 'blur(8px) saturate(120%)',
              WebkitBackdropFilter: 'blur(8px) saturate(120%)',
              border: '1px solid rgba(15,23,42,0.08)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            }}
          >
            <Box
              component="img"
              src={car}
              alt="UTASR test car on track"
              sx={{
                display: 'block',
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      </SimpleContainer>
    </Box>
  );
};

export default Main;
