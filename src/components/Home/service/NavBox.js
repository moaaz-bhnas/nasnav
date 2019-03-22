import React from 'react';
import dot from '../../../image/dot.svg';
import google from '../../../image/google.png';
import navboxImage from '../../../image/navbox-image.png';
import googleBadge from '../../../image/google-badge.png';
import view360Badge from '../../../image/360-badge.png';
import onlinePaymentBadge from '../../../image/online-badge.png';
import designEditorBadge from '../../../image/design-badge.png';
import barcode from '../../../image/barcode.png';
import './NavBox.scss';

const NavBox = () => {
  return (
    <article className="service" role="article">
      <div className="service__imageContainer service__imageContainer_shortened service__imageContainer_width_half service__imageContainer_float_right">
        <img src={navboxImage} alt="Navbox image" className="image image_size_full serviceImageContainer__image"/>
        <img src={googleBadge} alt="Google badge" className="serviceImageContainer__googleBadge"/>
        <img src={barcode} alt="Barcode" className="serviceImageContainer__barcode"/>
        <img src={onlinePaymentBadge} alt="Online payment badge" className="serviceImageContainer__onlinePaymentBadge"/>
        <img src={designEditorBadge} alt="Design editor badge" className="serviceImageContainer__designEditorBadge"/>
        <img src={view360Badge} alt="360 view badge" className="serviceImageContainer__360ViewBadge"/>
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
        <button className="button button_color_white button_back_blue button_shape_oval button_size_large buttn_decoration_underline">Download PDF</button>
      </div>
    </article>
  );
}

export default NavBox;