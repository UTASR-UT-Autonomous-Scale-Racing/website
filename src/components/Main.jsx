import React from 'react';
import SimpleContainer from './SimpleContainer';
import car from '../assets/dummycar.jpg';
import { Box } from '@mui/material';

export const Main = () => {
  return (
    <SimpleContainer bgColor="#fffff">
      
      <Box
       sx={{ 
        display: 'flex', 
        flexDirection: {
          md :'row',
          xs: "column"
      },  
        justifyContent: 'space-between', 
        alignItems: 'center',
        minHeight: '750px',
        width: '100%',
        p: 10
        }}
        >
           {/* Text Container */}
      <Box
      sx={{
        // width: '100%%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}>
        <header>
          <h1 style={{ fontSize: '3rem' }}>Main</h1>
          <h2 style={{ fontSize: '2rem' }}>Who we are</h2>
          <p>aodsbfasdiofjasiufnhasiduf</p>
          <h2 style={{ fontSize: '2rem' }}>Objectives</h2>
          <p>aodsbfasdiofjasiufnhasiduf</p>
        </header>
      </Box>

      {/* Image Container */}
      <Box
      component="img"
      src={car}
      sx={{
        width: "500px"
      }}/>


      </Box>
     
      
    </SimpleContainer>
  );
}

export default Main;