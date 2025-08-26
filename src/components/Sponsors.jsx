import React from 'react';
import SimpleContainer from './SimpleContainer';
import { Box, Typography } from '@mui/material';
// If you're on MUI v5 use Unstable_Grid2; on v6+ keep '@mui/material/Grid2'
import Grid2 from '@mui/material/Grid2';

import affiliate1 from '../assets/skule_crest.png';
import affiliate2 from '../assets/CSC.png';
import affiliate3 from '../assets/skule-logo-white.svg';
import GradientSection from './GradientSection';

export const Sponsors = () => {
  const sponsorImages = [affiliate1, affiliate2, affiliate3];

  return (
    <GradientSection id="sponsors"
    sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 8, md: 10 } }}>
      <SimpleContainer>
        {/* Heading */}
        <Box sx={{ textAlign: 'center', color: '#fff', mb: { xs: 3, md: 4 } }}>
          <Typography variant="overline" sx={{ letterSpacing: '0.15em', opacity: 0.7 }}>
            Supporters
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 750, letterSpacing: '-0.02em', mb: 1 }}>
            Our Supporters
          </Typography>
          <Typography
            variant="body1"
            sx={{ opacity: 0.92, maxWidth: 820, mx: 'auto' }}
          >
            We are grateful for the generous support of our sponsors and partners. Their
            contributions enable us to develop innovative projects, host engaging events,
            and foster a thriving community of learning and collaboration.
          </Typography>
        </Box>

        {/* Glass logo tiles – sizes match the older layout */}
        <Box sx={{ px: { xs: 2, md: 4 }, mb: { xs: 3, md: 4 } }}>
          <Grid2 container spacing={{ xs: 2.5, md: 3.5 }} justifyContent="center" alignItems="stretch">
            {sponsorImages.map((src, i) => (
              <Grid2 key={i} xs={6} sm={4} md={3} display="flex">
                <Box
                  className="hover-lift"
                  sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: { xs: 2, md: 2.5 },
                    borderRadius: 3,
                    // frosted glass
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.06))',
                    backdropFilter: 'blur(8px) saturate(120%)',
                    WebkitBackdropFilter: 'blur(8px) saturate(120%)',
                    border: '1px solid rgba(255,255,255,0.22)',
                    boxShadow: '0 10px 26px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.20)',
                    minHeight: { xs: 120, sm: 140, md: 170 }, // tile height similar to old feel
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={`Supporter ${i + 1}`}
                    sx={{
                      height: { xs: 100, sm: 120, md: 140 }, // ≈ your previous 140px desktop logos
                      width: 'auto',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'contrast(1.05) brightness(0.98)',
                    }}
                  />
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Box>

        {/* CTA */}
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', color: '#fff', opacity: 0.95, maxWidth: 740, mx: 'auto' }}
        >
          Interested in sponsoring UTASR? Contact us to explore opportunities and help drive the future
          of autonomous technology.
        </Typography>
      </SimpleContainer>
    </GradientSection>
  );
};

export default Sponsors;
