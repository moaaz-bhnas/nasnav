import React from 'react';
import NavboxEditor from './NavboxEditor';
import EasyExperience from './EasyExperience';
import Panoramas from './Panoramas';

const ServiceSection = () => {
	return (
		<section className="serviceSection shopping__serviceSection" role="region" aria-labelledby="serviceSection__title">
      <div className="container">
        <h2 className="serviceSection__title" id="serviceSection__title">Services</h2>
        <ul className="list serviceList serviceSection__list">
          <li className="serviceList__item">
            <NavboxEditor />
          </li>
          <li className="serviceList__item">
            <EasyExperience />
          </li>
          <li className="serviceList__item">
            <Panoramas />
          </li>
        </ul>
      </div>
    </section>
	);
}

export default ServiceSection;