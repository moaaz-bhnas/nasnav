import React from 'react';
import './ServiceSection.scss';
import NavboxEditor from './NavboxEditor';
import NavboxEditor2 from './NavboxEditor2';
import View360 from './View360';

const ServiceSection = () => {
	return (
		<section className="serviceSection shopping__serviceSection" role="region" aria-labelledby="serviceSection__title">
      <div className="container">
        <h2 className="serviceSection__title" id="serviceSection__title">Services</h2>
        <ul className="list serviceList serviceSection__list">
          <li className="serviceList__item">
            <NavboxEditor />
          </li>
          <li className="serviceList__item seo2">
            <View360 />
          </li>
          <li className="serviceList__item">
            <NavboxEditor2 />
          </li>
        </ul>
      </div>
    </section>
	);
}

export default ServiceSection;