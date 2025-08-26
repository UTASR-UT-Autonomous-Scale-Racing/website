import React from 'react';
import AppBar from './ResponsiveAppBar';
import Header from './Header';
import Carousel from './Carousel';
import SectionBlock from './SectionBlock';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      {/* <AppBar /> */}
      <Header />
        <Carousel />
      <SectionBlock title="Section 1" content="Content for section 1" />
      <SectionBlock title="Section 2" content="Content for section 2" />
      <SectionBlock title="Section 3" content="Content for section 3" />
      <Footer />
    </div>
  )
}

export default Home;