import React from 'react';
import dot from '../../../image/dot.svg';
import phone from '../../../image/home-header-phone.png';
import tablet from '../../../image/control-tablet.png';
import badge1 from '../../../image/control-badge1.png';
import badge2 from '../../../image/control-badge2.png';
import badge3 from '../../../image/control-badge3.png';
import './ControlPanel.scss';

const ControlPanel = () => {
  return (
    <article className="service controlPanel" role="article">
      <div className="service__imageContainer service__imageContainer_shortened service__imageContainer_width_half service__imageContainer_float_right">
        <img className="controlPanel__phone" src={phone} alt="Phone"/>
        <img className="controlPanel__tablet" src={tablet} alt="Tablet"/>
        <img className="controlPanel__badge" src={badge1} alt="Badge"/>
        <img className="controlPanel__badge" src={badge2} alt="Badge"/>
        <img className="controlPanel__badge" src={badge3} alt="Badge"/>
      </div>
      <div className="service__content service__content_width_half service__content_float_left">
        <h3 className="service__title">Control Panel</h3>
        <p className="paragraph service__paragraph paragraph_color_grey">
          How will my products be displayed?
        </p>
        <p className="paragraph service__paragraph paragraph_size_large">
          <strong>Control panel</strong> to edit 360 pictures of branches
        </p>
        <p className="paragraph service__paragraph paragraph_color_grey paragraph_line_high">
          Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box
        </p>
        <ul className="list stepList">
          <li className="step stepList__step">
            <img src={dot} alt="Step icon" className="step__icon"/>
            <span className="step__explanation">
              Add and modify products
            </span>
          </li>
          <li className="step stepList__step">
            <img src={dot} alt="Step icon" className="step__icon"/>
            <span className="step__explanation">
              Aditions directions and shapes
            </span>
          </li>
          <li className="step stepList__step">
            <img src={dot} alt="Step icon" className="step__icon"/>
            <span className="step__explanation">
              A separate control panel for each branch
            </span>
          </li>
        </ul>
        <button className="button service__button button_color_white button_back_blue button_shape_oval button_size_large buttn_color_white buttn_decoration_underline">Download PDF</button>
      </div>
    </article>
  );
}

export default ControlPanel;