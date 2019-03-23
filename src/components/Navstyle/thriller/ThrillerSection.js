import React from 'react';
import './ThrillerSection.scss';

const ThrillerSection = () => {
  return (
    <section className="thrillerSection styles__thrillerSection" role="region" aria-labelledby="trhrillerSection__title">
      <div className="container">
        <h2 className="trhrillerSection__title" id="trhrillerSection__title">Your way to fame</h2>
        <p className="paragraph paragraph_size_large paragraph_align_center thriller__paragraph">
          Choose among great models to be featured
        </p>
        <p className="paragraph paragraph_line_high paragraph_align_center paragraph_color_grey paragraph_size_medSmall thrillerSection__paragraph">
          Through a few simple steps can make your shop up to the public quickly.
        </p>
        <p className="paragraph paragraph_line_high paragraph_align_center paragraph_shortened_large paragraph_centered thrillerSection__paragraph">
          Aspernatur eligendi perspiciatis qui eveniet temporibus et. In molestias odio et et. Possimus ipsum facere saepe ullam id. Impedit est aut dicta autem modi reprehenderit ab occaecati.
        </p>
      </div>
    </section>
  );
}

export default ThrillerSection;