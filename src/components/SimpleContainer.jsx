// SimpleContainer.jsx
import * as React from 'react';
import { Box } from '@mui/material';

export default function SimpleContainer({ children, bgColor, sx = {} }) {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1400,                 // match your exec grid rails
        mx: 'auto',
        px: { xs: 2, sm: 3, md: 4 },    // 👈 phone/tablet gutters
        ...(bgColor ? { bgcolor: bgColor } : {}),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
