import React from 'react';
import Header from '../header/Header';
import Intro from './header-components/intro';
import HeaderImage from './header-components/HeaderImage';
import About from './about/About';
import ServiceSection from './service/ServiceSection';
import Footer from '../footer/Footer';
import CountrySection from '../countries/CountrySection';

const HomePage = () => {
  return (
    <React.Fragment>
      <Header 
        intro={<Intro />} 
        headerImage={<HeaderImage />}
      />
      <main className="mainContent" role="main">
        <About />
        <ServiceSection />
        <CountrySection />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;