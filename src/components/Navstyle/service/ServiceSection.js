import React from 'react';
import './ServiceSection.scss';
import Styles from './Styles';

const ServiceSection = () => {
	return (
		<section className="serviceSection shopping__serviceSection" role="region" aria-labelledby="serviceSection__title">
      <div className="container">
        <h2 className="serviceSection__title" id="serviceSection__title">Services</h2>
        <Styles />
        <ul className="list serviceList serviceSection__list">
          <li className="serviceList__item">
            {/* <NavboxEditor /> */}
          </li>
          <li className="serviceList__item seo2">
            {/* <View360 /> */}
          </li>
        </ul>
      </div>
    </section>
	);
}

export default ServiceSection;