import React from 'react';
import dot from '../../../image/dot.svg';
import google from '../../../image/google.png';
import navboxImage from '../../../image/navbox-image.png';
import './NavBox.scss';

const NavBox = () => {
  return (
    <article className="service" role="article">
      <div className="serviceImageContainer serviceImageContainer_width_half serviceImageContainer_float_right">
        <img src={navboxImage} alt="Navbox image"     className="image serviceImageContainer__image"/>
      </div>
      <div className="service__content service__content_width_half service__content_float_left">
        <h3 className="service__title">NavBox</h3>
        <p className="paragraph service__paragraph paragraph_color_grey">
          Reach the buyer faster
        </p>
        <p className="paragraph service__paragraph paragraph_size_large">
          <strong>NavBox</strong> Your products are top Google search
        </p>
        <p className="paragraph service__paragraph paragraph_color_grey paragraph_line_high">
          Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box
        </p>
        <ul className="list stepList">
          <li className="step stepList__step">
            <img src={dot} alt="Step icon" className="step__icon"/>
            <span className="step__explanation">
              Just plug in the NasNav Box
            </span>
          </li>
          <li className="step stepList__step">
            <img src={dot} alt="Step icon" className="step__icon"/>
            <span className="step__explanation">
              Your Products appear online
            </span>
          </li>
          <li className="step stepList__step">
            <img src={dot} alt="Step icon" className="step__icon"/>
            <span className="step__explanation">
              Come up on 
              <img className="step__googleIcon" src={google} alt="Google logo"/>
            </span>
          </li>
        </ul>
        <button className="button button_color_white button_back_blue button_shape_oval button_size_large buttn_decoration_underline">Get Started</button>
      </div>
    </article>
  );
}

export default NavBox;