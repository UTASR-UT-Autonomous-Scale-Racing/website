import React from 'react';
import SimpleContainer from './SimpleContainer';
import car from '../assets/dummycar.jpg';
import { Box } from '@mui/material';

export const Main = () => {
  const [phone, setPhone] = React.useState(false);
  
  React.useEffect(() => {
    setPhone(window.innerWidth < 700);
    
    const handleResize = () => {
      setPhone(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const textStyle = {
    fontFamily: 'Poppins, sans-serif',
  };


  return (
    <Box sx={{ padding: { xs: '50px 20px', md: '100px' } }}>
      <SimpleContainer bgColor="#fffff">
        <header>
          {!phone && <h1 style={{ fontSize: '3rem', textAlign: 'center', fontWeight: 'bold', ...textStyle }}>Welcome to UTASR</h1>}
        </header>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              md: 'row',
              xs: 'column'
            },
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: 0,
          }}
        >
          {/* Text Container */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              '@media (max-width: 600px)': {
                padding: '20px',
              },
            }}>
            <header style={{ textAlign: 'justify', padding: '0px 20px', ...textStyle }}>
              <h2 style={{ fontSize: '2rem', ...textStyle }}> <b> Who we are </b></h2>
              <p><b>University of Toronto Anonymous Scale Racing (UTASR)</b> is a forward-thinking design team dedicated to developing scalable,
                learning-based algorithms for RC car control. Our mission is to create accessible projects that offer hands-on testing and
                practical experience, empowering our members with real-world engineering skills.
              </p>
              <p>We host workshops, collaborative events, and on-site testing sessions to foster a community of innovation. Our activities
                are open to all engineering students eager to apply their skills in a dynamic, engaging environment.
              </p>
              <p>Join us to explore algorithm development, design, and the thrill of RC racing while contributing to a vibrant campus life at UofT.</p>

              <h2 style={{ fontSize: '2rem', marginTop: "10px", ...textStyle }}><b>Our Objectives</b></h2>
              <ul style={{ listStyleType: 'circle', paddingLeft: '20px', ...textStyle }}>
                <li>Develop cutting-edge AI and robotics solutions.</li>
                <li>Foster collaboration and learning among students.</li>
                <li>Compete and excel in autonomous racing competitions.</li>
              </ul>
            </header>
          </Box>
          <Box
            component="img"
            src={car}
            sx={{
              width: "500px",
              '@media (max-width: 600px)': {
                width: '100%',
              },
            }} />
        </Box>
      </SimpleContainer>
    </Box>
  );
}

export default Main;