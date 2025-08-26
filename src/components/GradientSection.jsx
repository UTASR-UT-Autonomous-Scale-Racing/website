import React from 'react';
import { Box } from '@mui/material';

/**
 * Wrap any section to apply a moving blue gradient + proper spacing.
 * Props:
 *  - id?: string (for anchor links)
 *  - children: ReactNode
 *  - disableAnimation?: boolean
 *  - sx?: MUI sx overrides
 */
const GradientSection = ({ id, children, disableAnimation = false, sx = {} }) => {
  return (
    <Box
      id={id}
      component="section"
      className={`section gradient-blue ${disableAnimation ? '' : 'gradient-animated'}`}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default GradientSection;
