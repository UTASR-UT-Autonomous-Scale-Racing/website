import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer({ children, bgColor }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Box sx={{ bgcolor: bgColor, width: '100%', minHeight: '750px' }}>
          {children} 
        </Box>
      </Container>
    </React.Fragment>
  );
}