import React from 'react';
import './ThrillerSection.scss';

const ThrillerSection = () => {
  return (
    <section className="thrillerSection" role="region" aria-labelledby="trhrillerSection__title">
      <div className="container">
        <h2 className="trhrillerSection__title" id="trhrillerSection__title">Your way to fame</h2>
        <p className="paragraph paragraph_line_high paragraph_size_large statistics__paragraph paragraph_shortened_med paragraph_align_center">
          Statistics include all tasks for your shop with distinct view
        </p>
        <p className="paragraph paragraph_line_high paragraph_color_grey statistics__paragraph paragraph_shortened_large paragraph_align_center">
          We've dsigned an integrated system for the cash resgister to be able to implement many features with ease, but we'll explain partial scan and its implementation.
        </p>
      </div>
    </section>
  );
}

export default ThrillerSection;