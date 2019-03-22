import React from 'react';
import Header from '../header/Header';
import Intro from './header-components/Intro';
import Footer from '../footer/Footer';
import CountrySection from '../countries/CountrySection';
import ServiceSection from './service/ServiceSection';
import Laptop from './header-components/Laptop';
import StatisticsSection from './statistics/StatisticsSection';

const Editor360 = () => {
  return (
    <React.Fragment>
      <Header 
        intro={<Intro />} 
        headerImage={<Laptop />}
      />
      <main className="mainContent" role="main">
        <ServiceSection />
        <StatisticsSection />
        <CountrySection />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Editor360;