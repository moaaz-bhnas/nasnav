import React from 'react';
import './ServiceSection.scss';
import Seo from './Seo';
import Seo2 from './Seo2';
import Marketing from './Marketing';

const ServiceSection = () => {
	return (
		<section className="serviceSection shopping__serviceSection" role="region" aria-labelledby="serviceSection__title">
      <div className="container">
        <h2 className="serviceSection__title" id="serviceSection__title">Services</h2>
        <ul className="list serviceList serviceSection__list">
          <li className="serviceList__item">
            <Seo />
          </li>
          <li className="serviceList__item seo2">
            <Seo2 />
          </li>
        </ul>
        <p className="paragraph paragraph_line_high paragraph_size_large paragraph_align_center paragraph_shortened_large paragraph_centered">
          <strong>Quick statistics</strong> and details of all the tasks you performed by cashier
        </p>
        <p className="paragraph paragraph_line_high paragraph_color_grey paragraph_align_center paragraph_shortened_large paragraph_centered serviceSection__paragraph">
          Some pages in can find out what's new and special for your customer details and the work carried out through the application
        </p>
        <ul className="list serviceList serviceSection__list">
          <li className="serviceList__item">
            <Seo />
          </li>
          <li className="serviceList__item seo2">
            <Marketing />
          </li>
        </ul>
      </div>
    </section>
	);
}

export default ServiceSection;