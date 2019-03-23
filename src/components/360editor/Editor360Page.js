import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import CountrySection from '../countries/CountrySection';
import Intro from './header-components/Intro';
import HeaderImage from './header-components/HeaderImage';
import ThrillerSection from './thriller/ThrillerSection';
import ServiceSection from './service/ServiceSection';
import StatisticsSection from './statisics/StatisticsSection';

const Editor360Page = () => {
  return (
    <React.Fragment>
      <Header 
        intro={<Intro />} 
        headerImage={<HeaderImage />}
      />
      <main className="mainContent" role="main">
        <ThrillerSection />
        <ServiceSection />
        <StatisticsSection />
        <CountrySection />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Editor360Page;