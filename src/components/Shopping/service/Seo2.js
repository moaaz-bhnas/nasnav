import React from 'react';
import phones from '../../../image/shopping-seo-phones2.png';
import './Seo.scss';

const Seo = () => {
  return (
    <article className="service seo" role="article">
      <div className="service__imageContainer service__imageContainer_shortened_viewport_small service__imageContainer_width_overHalf service__imageContainer_float_left">
        <img src={phones} alt="your site is always at the top" className="image image_size_full serviceImageContainer__image"/>
      </div>
      <div className="service__content service__content_width_half service__content_float_right">
        <h3 className="service__title">SEO</h3>
        <p className="paragraph service__paragraph paragraph_color_grey">
          You are the strongest in Google results
        </p>
        <p className="paragraph service__paragraph paragraph_size_large">
          <strong>Easily</strong> and super fast your name becomes the best in Google
        </p>
        <p className="paragraph service__paragraph paragraph_color_grey paragraph_line_high">
          Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box
        </p>
        <button className="button button_color_white button_back_blue button_shape_oval button_size_large buttn_decoration_underline">Get Started</button>
      </div>
    </article>
  );
}

export default Seo;