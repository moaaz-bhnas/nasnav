import React from 'react';
import Header from '../header/Header';
import Intro from './header-components/Intro';
import HeaderImage from './header-components/HeaderImage';
import Footer from '../footer/Footer';
import CountrySection from '../countries/CountrySection';
import ThrillerSection from './thriller/ThrillerSection';
import ServiceSection from './service/ServiceSection';

const shopping = () => {
  return (
    <React.Fragment>
      <Header 
        intro={<Intro />} 
        headerImage={<HeaderImage />}
        overflowHidden={true}
      />
      <main className="mainContent" role="main">
        <ThrillerSection />
        <ServiceSection />
        <CountrySection />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default shopping;