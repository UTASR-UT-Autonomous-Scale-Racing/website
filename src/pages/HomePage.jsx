import React from 'react';
import { Header } from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import AppBar from '../components/ResponsiveAppBar';
import Main from '../components/Main'
import AboutUs from '../components/AboutUs'
import Events from '../components/Events'
import Sponsors from '../components/Sponsors';
import JoinUs from '../components/JoinUs';

export const HomePage = () => {
  return (
    <div>
      <AppBar />
      <div style={{ marginTop: '64px' }}> 
        <Header />
        <Main />
        <AboutUs />
        <Events />
        <Carousel />
        <Sponsors />
        <JoinUs />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;