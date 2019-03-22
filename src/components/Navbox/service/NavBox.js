import React from 'react';
import navbox from '../../../image/navbox.png'
// import './NavBox.scss';

const NavBox = () => {
  return (
    <article className="service" role="article">
      <div className="service__imageContainer service__imageContainer_shortened service__imageContainer_width_half service__imageContainer_float_left">
        <img src={navbox} alt="Navbox image" className="image image_size_full serviceImageContainer__image"/>
      </div>
      <div className="service__content service__content_width_half service__content_float_right">
        <h3 className="service__title">NavBox</h3>
        <p className="paragraph service__paragraph paragraph_color_grey">
          You'll get the device whereever you are
        </p>
        <p className="paragraph service__paragraph paragraph_size_large">
          <strong>We ship</strong> a device to one of your branches to connect and get results
        </p>
        <p className="paragraph service__paragraph paragraph_color_grey paragraph_line_high">
          Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box
        </p>
        <button className="button button_color_white button_back_blue button_shape_oval button_size_large buttn_decoration_underline">Get Started</button>
      </div>
    </article>
  );
}

export default NavBox;