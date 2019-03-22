import React from 'react';
import './ThrillerSection.scss';
import ThrillerList from './ThrillerList';

const ThrillerSection = () => {
  return (
    <section className="thrillerSection" role="region" aria-labelledby="trhrillerSection__title">
      <div className="container">
        <h2 className="trhrillerSection__title" id="trhrillerSection__title">Your way to fame</h2>
        <p className="paragraph paragraph_size_large paragraph_align_center thriller__paragraph">
          Simple steps away from fame
        </p>
        <p className="paragraph paragraph_line_high paragraph_align_center paragraph_color_grey paragraph_size_medSmall">
          Through a few simple steps can make your shop up to the public quickly.
        </p>
        <ThrillerList />
      </div>
    </section>
  );
}

export default ThrillerSection;