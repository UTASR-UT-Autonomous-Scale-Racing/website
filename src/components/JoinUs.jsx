import React from 'react';
import SimpleContainer from './SimpleContainer';
import { Typography, Box, Link, Button, Stack } from '@mui/material';

export const JoinUs = () => {
  return (
    <Box
      component="section"
      id="join-us"
      sx={{
        bgcolor: '#fff',
        color: '#0f172a',
        pt: { xs: 6, md: 7 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <SimpleContainer>
        {/* Heading */}
        <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 } }}>
          <Typography variant="overline" sx={{ letterSpacing: '0.15em', opacity: 0.55 }}>
            Get Involved
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 750, letterSpacing: '-0.02em', mb: 1 }}>
            Join Us
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 820, mx: 'auto', opacity: 0.8 }}>
            Become part of UTASR and contribute to the future of autonomous technology. We welcome
            passionate people eager to collaborate on cutting-edge projects in robotics and AI.
          </Typography>
        </Box>

        {/* Glass CTA panel on white */}
        <Box
          className="hover-lift"
          sx={{
            maxWidth: 960,
            mx: 'auto',
            p: { xs: 2.5, md: 3 },
            borderRadius: 3,
            background: 'linear-gradient(180deg, rgba(15,23,42,0.04), rgba(15,23,42,0.02))',
            backdropFilter: 'blur(8px) saturate(120%)',
            WebkitBackdropFilter: 'blur(8px) saturate(120%)',
            border: '1px solid rgba(15,23,42,0.08)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: 820, mx: 'auto' }}>
            Have questions? Reach out at{' '}
            <Link
              href="mailto:utasrteam@gmail.com"
              sx={{
                color: '#0f172a',
                fontWeight: 700,
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                '&:hover': { opacity: 0.8 },
              }}
            >
              utasrteam@gmail.com
            </Link>
            .
          </Typography>

          <Typography variant="body1" sx={{ opacity: 0.8, mt: 1.5 }}>
            Join our community.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            justifyContent="center"
            sx={{ mt: 2.5 }}
          >
            {/* NEW: Join the Design Team */}
        <Button
  component={Link}
  href="https://docs.google.com/forms/d/e/1FAIpQLSe0TqZ3DN5c3Mc-Z_5DGH5wCZEkekE0Cfu3OGb6XXHDIuVgCA/viewform?usp=sharing&ouid=111349257839320868982"
  target="_blank"
  rel="noopener noreferrer"
  variant="contained"
  sx={{
    textTransform: 'none',
    fontWeight: 700,
    px: 2.25,
    py: 1,
    borderRadius: 2,
    color: '#fff',
    // visible monochrome gradient + diagonal highlight sheen
    backgroundImage: `
      radial-gradient(120% 100% at 20% 0%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%),
      linear-gradient(135deg, #3a3a3a 0%, #1a1a1a 55%, #000 100%)
    `,
    border: '1px solid rgba(255,255,255,0.24)',
    boxShadow: '0 8px 22px rgba(0,0,0,0.25)',
    transition: 'transform .15s ease, box-shadow .2s ease, filter .2s ease, background .2s ease',
    '&:hover': {
      backgroundImage: `
        radial-gradient(120% 100% at 20% 0%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 60%),
        linear-gradient(135deg, #4a4a4a 0%, #222 55%, #0a0a0a 100%)
      `,
      boxShadow: '0 12px 28px rgba(0,0,0,0.35)',
      transform: 'translateY(-1px)',
    },
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: '0 6px 16px rgba(0,0,0,0.28)',
    },
    '&:focus-visible': {
      outline: '2px solid rgba(255,255,255,0.7)',
      outlineOffset: '2px',
    },
  }}
>
  Join the Design Team
</Button>
            {/* Existing: Discord */}
            <Button
              component={Link}
              href="https://discord.gg/ZzGRqah5hC"
              target="_blank"
              rel="noopener noreferrer"
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
                '&:hover': {
                  boxShadow: '0 12px 28px rgba(30,64,175,0.35)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Join our Discord
            </Button>
            {/* Existing: Email
            <Button
              component={Link}
              href="mailto:.utasrteam@gmail.com"
              variant="outlined"
              sx={{
                textTransform: 'none',
                fontWeight: 700,
                px: 2,
                py: 1,
                borderRadius: 2,
                color: '#0f172a',
                borderColor: 'rgba(15,23,42,0.3)',
                '&:hover': {
                  borderColor: '#0f172a',
                  backgroundColor: 'rgba(15,23,42,0.04)',
                },
              }}
            >
              Email Us
            </Button>
            */}
          </Stack>
        </Box>
      </SimpleContainer>
    </Box>
  );
};

export default JoinUs;
