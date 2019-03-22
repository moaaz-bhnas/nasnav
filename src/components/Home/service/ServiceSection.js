import React from 'react';
import NavBox from './NavBox';
import './ServiceSection.scss';
import Styles from './Styles';
import View360 from './View360';
import ControlPanel from './ControlPanel';
import Dashboard from './Dashboard';

const ServiceSection = () => {
  return (
    <section className="serviceSection home__serviceSection" role="region" aria-labelledby="serviceSection__title">
      <div className="container">
        <h2 className="serviceSection__title" id="serviceSection__title">Services</h2>
        <ul className="list serviceList">
          <li className="serviceList__item">
            <NavBox />
          </li>
          <li className="serviceList__item">
            <Styles />
          </li>
          <li className="serviceList__item">
            <View360 />
          </li>
          <li className="serviceList__item">
            <ControlPanel />
          </li>
          <li className="serviceList__item">
            <Dashboard />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ServiceSection;