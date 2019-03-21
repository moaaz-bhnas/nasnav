import React from 'react';
import stylesImage from '../../../image/styles-image.png';
import dot from '../../../image/dot.svg';
import './Styles.scss';

const Styles = () => {
  return (
    <article className="service navboxStyles" role="article">
      <div className="service__imageContainer service__imageContainer_width_half service__imageContainer_float_left service__imageContainer_align_left">
        <img src={stylesImage} alt="Navbox styles" className="image image_extend_left image_shortened_viewport_small"/>
      </div>
      <div className="service__content service__content_width_half service__content_float_right">
        <h3 className="service__title">NavBox Styles</h3>
        <p className="paragraph service__paragraph paragraph_color_grey">
          How will my products be displayed?
        </p>
        <p className="paragraph service__paragraph paragraph_size_large">
          <strong>+10 Navbox</strong> styles you can choose between
        </p>
        <p className="paragraph service__paragraph paragraph_color_grey paragraph_line_high">
          Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box
        </p>
        <ul className="list stepList">
          <li className="step stepList__step">
            <img src={dot} alt="Step icon" className="step__icon"/>
            <span className="step__explanation">
              Adjust the colors to suit your type of work
            </span>
          </li>
          <li className="step stepList__step">
            <img src={dot} alt="Step icon" className="step__icon"/>
            <span className="step__explanation">
              Edit photos and upload photos that reflect you
            </span>
          </li>
          <li className="step stepList__step">
            <img src={dot} alt="Step icon" className="step__icon"/>
            <span className="step__explanation">
              Add you logo and your ways of communication
            </span>
          </li>
        </ul>
        <button className="button service__button button_color_white button_back_blue button_shape_oval button_size_large buttn_color_white buttn_decoration_underline">Get Started</button>
        <button className="button button_color_white button_back_green button_shape_oval button_size_large  buttn_decoration_underline">Live Demo</button>
      </div>
    </article>
  );
}

export default Styles;