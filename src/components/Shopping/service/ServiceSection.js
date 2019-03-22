import React from 'react';
import './ServiceSection.scss';
import Seo from './Seo';
import Seo2 from './Seo2';

const ServiceSection = () => {
	return (
		<section className="serviceSection shopping__serviceSection" role="region" aria-labelledby="serviceSection__title">
      <div className="container">
        <h2 className="serviceSection__title" id="serviceSection__title">Services</h2>
        <ul className="list serviceList">
          <li className="serviceList__item">
            <Seo />
          </li>
          <li className="serviceList__item seo2">
            <Seo2 />
          </li>
        </ul>
      </div>
    </section>
	);
}

export default ServiceSection;