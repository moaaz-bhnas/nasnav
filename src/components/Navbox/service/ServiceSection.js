import React from 'react';
import './ServiceSection.scss';
import NavBox from './NavBox';
import Seo from './Seo';

const ServiceSection = () => {
	return (
		<section className="serviceSection navbox__serviceSection" role="region" aria-labelledby="serviceSection__title">
      <div className="container">
        <h2 className="serviceSection__title" id="serviceSection__title">Services</h2>
        <ul className="list serviceList">
          <li className="serviceList__item">
            <NavBox />
          </li>
          <li className="serviceList__item">
            <Seo />
          </li>
        </ul>
      </div>
    </section>
	);
}

export default ServiceSection;