import React from 'react';
import './ServiceSection.scss';
import NavBox from './NavBox';
import Seo from './Seo';
import Styles from './Styles';

const ServiceSection = () => {
	return (
		<section className="serviceSection navbox__serviceSection" role="region" aria-labelledby="serviceSection__title">
      <div className="container">
        <h2 className="serviceSection__title" id="serviceSection__title">Services</h2>
        <ul className="list serviceList serviceSection__list">
          <li className="serviceList__item">
            <NavBox />
          </li>
          <li className="serviceList__item">
            <Seo />
          </li>
          <li className="serviceList__item">
            <Styles />
          </li>
        </ul>
      </div>
    </section>
	);
}

export default ServiceSection;