// AboutUs.jsx
import React from 'react';
import SimpleContainer from './SimpleContainer';
import GradientSection from './GradientSection';

import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Divider,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Exec headshots
import adam from '../assets/adam.jpg';
import connor from '../assets/Connor_Diao.jpg';
import daniel from '../assets/Daniel_DeBrun.jpeg';
import han from '../assets/Han_Hu.jpeg';
import martin from '../assets/Martin_Shanahan.jpeg';
import mahin from '../assets/Mahin_Rahman.jpeg';
import yushu from '../assets/Yushu_Wang.jpeg';

/** ----------------------------------------------------------------
 *  Exec data 
 * ---------------------------------------------------------------- */
const EXECS = [
  {
    role: 'Executive Director',
    name: 'Yushu Wang',
    major: '',
    linkedin: 'https://www.linkedin.com/in/stevenyushuwang/',
    img: yushu,
  },
  {
    role: 'Software Team Lead',
    name: 'Daniel De Brun',
    major: '',
    linkedin: 'https://www.linkedin.com/in/danieldebrun/',
    img: daniel,
  },
  {
    role: 'Hardware Team Lead',
    name: 'Adam Pietrewicz',
    major: '',
    linkedin: 'https://www.linkedin.com/in/adam-pietrewicz/',
    img: adam,
  },
  {
    role: 'Finance Director',
    name: 'Martin Shanahan',
    major: '',
    linkedin: 'https://www.linkedin.com/in/martin-shanahan-961428255/',
    img: martin,
  },
  {
    role: 'Marketing Director',
    name: 'Mahin Rahman',
    major: '',
    linkedin: 'https://www.linkedin.com/in/mahinrahman05/?originalSubdomain=ca',
    img: mahin,
  },
  {
    role: 'Electrical Lead',
    name: 'Connor Diao',
    major: '',
    linkedin: 'https://www.linkedin.com/in/zhuo-diao-7b04052a1/',
    img: connor,
  },
  {
    role: 'Mechanical Lead',
    name: 'Han Hu',
    major: '',
    linkedin: 'https://www.linkedin.com/in/han-hu-6a7419254/',
    img: han,
  },
];

/** Small presentational card for each exec (fixed size, centered grid uses these) */
function ExecCard({ role, name, major, linkedin, img, sx }) {
  return (
    <Card
      className="hover-lift"
      elevation={0}
      sx={{
        width: 280,              // fixed width at all breakpoints
        height: 400,             // fixed height at all breakpoints
        borderRadius: 3,
        overflow: 'hidden',
        bgcolor: 'rgba(255,255,255,0.04)',
        border: '1px solid',
        borderColor: 'rgba(255,255,255,0.08)',
        display: 'flex',
        flexDirection: 'column',
        ...sx,
      }}
    >
      {/* Image area grows to fill */}
      <Box
        sx={{
          position: 'relative',
          flexGrow: 1,
          minHeight: 220,
          backgroundColor: 'rgba(255,255,255,0.03)',
        }}
      >
        <Box
          component="img"
          src={img}
          alt={`${name} headshot`}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'saturate(0.95) contrast(1.02)',
          }}
        />
        {/* Role chip */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            px: 1.1,
            py: 0.45,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#fff',
            borderRadius: 2,
            background:
              'linear-gradient(90deg, rgba(62,118,248,0.85), rgba(29,78,216,0.85))',
            border: '1px solid rgba(255,255,255,0.18)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {role}
        </Box>
      </Box>

      {/* Compact text footer */}
      <CardContent sx={{ p: 1.75, pt: 1.25 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
            color: '#fff',
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.2 }}
              noWrap
            >
              {name}
            </Typography>
            {major && (
              <Typography variant="body2" sx={{ opacity: 0.85, mt: 0.25 }} noWrap>
                {major}
              </Typography>
            )}
          </Box>
          <Tooltip title="LinkedIn" arrow>
            <IconButton
              component="a"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: '#60a5fa',
                '&:hover': {
                  color: '#93c5fd',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                },
                borderRadius: 2,
                flexShrink: 0,
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
}

const AboutUs = () => {
  return (
    <GradientSection id="about-us" sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 8, md: 10 } }}>
      <SimpleContainer>
        {/* Heading */}
        <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 } }}>
          <Typography variant="overline" sx={{ letterSpacing: '0.15em', opacity: 0.7 }}>
            About Us
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 750, letterSpacing: '-0.02em', mt: 0.5, mb: 1 }}>
            Meet the Team
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mt: 0.5, opacity: 0.9 }}>
            We’re a cross-disciplinary group building autonomous scale vehicles. From perception and
            planning to embedded systems and manufacturing, we work together to ship, test, iterate,
            and compete.
          </Typography>
        </Box>

        {/* Exec grid — fixed card size; 1/2/4/5 per row; centered */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, max-content)', // phones: 1 per row
              sm: 'repeat(2, max-content)', // tablets: 2 per row
              lg: 'repeat(4, max-content)', // desktop: 4 per row
              xl: 'repeat(5, max-content)', // large desktop: 5 per row
            },
            justifyContent: 'center',        
            gap: { xs: 2, sm: 3, md: 4 },
            maxWidth: 1400,
            mx: 'auto',
          }}
        >
          {EXECS.map((m) => (
            <ExecCard key={m.name} {...m} />
          ))}
        </Box>

        {/* Divider (restored) */}
        <Divider
          sx={{
            my: { xs: 3, md: 4 },
            borderColor: 'rgba(255,255,255,0.1)',
          }}
        />

        {/* Teams (same rails/horizontal padding as execs) */}
        <Box sx={{ maxWidth: 1400, mx: 'auto' }}>
          {/* Software Team */}
          <Box sx={{ width: '100%', mb: { xs: 3, md: 4 } }}>
            <Card
              elevation={0}
              sx={{
                bgcolor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 3,
                p: { xs: 2, md: 3 },
                color: '#fff',
              }}
            >
              <Typography variant="overline" sx={{ letterSpacing: '0.15em', opacity: 0.7 }}>
                Software Team
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: '-0.01em', mb: 1 }}>
                Perception • Planning • Control
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.95, lineHeight: 1.7 }}>
                We design the autonomy stack—from sensor fusion and SLAM to trajectory planning,
                simulation, and controls. Our stack blends ROS2, Python/C++, and ML tooling for rapid iteration.
              </Typography>
            </Card>
          </Box>

          {/* Hardware Team */}
          <Box sx={{ width: '100%', mb: { xs: 3, md: 4 } }}>
            <Card
              elevation={0}
              sx={{
                bgcolor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 3,
                p: { xs: 2, md: 3 },
                color: '#fff',
              }}
            >
              <Typography variant="overline" sx={{ letterSpacing: '0.15em', opacity: 0.7 }}>
                Hardware Team
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: '-0.01em', mb: 1 }}>
                Embedded • Power • Mechatronics
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.95, lineHeight: 1.7 }}>
                We build the platform: chassis, power delivery, sensor rigs, and embedded firmware.
                From PCB design and motor control to thermal and packaging, we turn ideas into testable
                hardware—then push it until it breaks (and fix it better).
              </Typography>
            </Card>
          </Box>
        </Box>
      </SimpleContainer>
    </GradientSection>
  );
};

export default AboutUs;
