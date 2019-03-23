import React from 'react';
import './ServiceSection.scss';
import Styles from './Styles';
import Styles2 from './Styles2';
import Carousel from '../carousel/Carousel';

const ServiceSection = () => {
	return (
		<section className="serviceSection" role="region" aria-labelledby="serviceSection__title">
      <div className="container">
        <h2 className="serviceSection__title" id="serviceSection__title">Services</h2>
        <Styles />
        <p className="paragraph navstyles__serviceParagraph paragraph_line_high paragraph_size_large paragraph_align_center paragraph_shortened_large paragraph_centered">
          Unique designs you can choose between them with a single button
        </p>
        <p className="paragraph paragraph_line_high paragraph_color_grey paragraph_align_center paragraph_shortened_large paragraph_centered serviceSection__paragraph">
          Through a few simple steps can make your shop up to the public quickly
        </p>
        <Styles2 />
        <Carousel />
      </div>
    </section>
	);
}

export default ServiceSection;