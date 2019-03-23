import React from 'react';
import './ServiceSection.scss';
import Styles from './Styles';
import Styles2 from './Styles2';

const ServiceSection = () => {
	return (
		<section className="serviceSection" role="region" aria-labelledby="serviceSection__title">
      <div className="container">
        <h2 className="serviceSection__title" id="serviceSection__title">Services</h2>
        <Styles />
        <p className="paragraph navstyles__serviceParagraph paragraph_line_high paragraph_size_large paragraph_align_center paragraph_shortened_large paragraph_centered">
          Quick statistics and details of all the tasks you performed by cashier
        </p>
        <p className="paragraph paragraph_line_high paragraph_color_grey paragraph_align_center paragraph_shortened_large paragraph_centered serviceSection__paragraph">
          Some pages in can find out what's new and special for your customer details and the work carried out through the application
        </p>
        <Styles2 />
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