import React from 'react';
import { Header } from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import AppBar from '../components/ResponsiveAppBar';
import Main from '../components/Main';
import AboutUs from '../components/AboutUs';
import Events from '../components/Events';
import Sponsors from '../components/Sponsors';
import JoinUs from '../components/JoinUs';

export const HomePage = () => {
  return (
    <div>
      <AppBar />
      <div style={{ marginTop: '64px' }}>
        <Header />
        <div id="main">
          <Main />
        </div>
        <div id="about-us">
          <AboutUs />
        </div>
        <div id="events">
          <Events />
        </div>
        <div id="gallery">
          <Carousel />
        </div>
        <div id="sponsors">
          <Sponsors />
        </div>
        <div id="join-us">
          <JoinUs />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;