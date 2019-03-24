import React from 'react';
import Header from '../header/Header';
import Intro from './header-components/Intro';
import Footer from '../footer/Footer';
import CountrySection from '../countries/CountrySection';
import HeaderImage from './header-components/HeaderImage';
import ThrillerSection from './thriller/ThrillerSection';
import ServiceSection from './service/ServiceSection';
import FeatureSection from './feature/FeatureSection';

const NavstylePage = () => {
  return (
    <React.Fragment>
      <Header 
        intro={<Intro />} 
        headerImage={<HeaderImage />}
      />
      <main className="mainContent" role="main">
        <ThrillerSection />
        <ServiceSection />
        <FeatureSection />
        <CountrySection />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default NavstylePage;