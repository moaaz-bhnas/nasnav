import React from 'react';
import ServiceList from './ServiceList';
import './ServiceSection.scss';

const ServiceSection = () => {
  return (
    <section className="serviceSection" role="region" aria-labelledby="serviceSection__title">
      <div className="container">
        <h2 className="serviceSection__title" id="serviceSection__title">serviceSection</h2>
        <p className="paragraph paragraph_size_large paragraph_align_center serviceSection__paragraph">
          Simple steps away from fame
        </p>
        <p className="paragraph paragraph_line_high paragraph_align_center paragraph_color_grey paragraph_size_medSmall">
          Through a few simple steps can make your shop up to the public quickly.
        </p>
        <ServiceList />
      </div>
    </section>
  );
}

export default ServiceSection;