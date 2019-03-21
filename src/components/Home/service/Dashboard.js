import React from 'react';
import dot from '../../../image/dot.svg';
import laptop from '../../../image/dashboard-image.png';
import badge1 from '../../../image/dashboard-badge1.png';
import badge2 from '../../../image/dashboard-badge2.png';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <article className="service dashboard" role="article">
      <div className="service__imageContainer service__imageContainer_shortened service__imageContainer_width_half service__imageContainer_float_left service__imageContainer_stuck_left_viewport_small">
        <img src={laptop} alt="Laptop" className="image image_size_full_viwport_small image_extend_left"/>
        <img className="service__badge" src={badge1} alt="Badge"/>
        <img className="service__badge" src={badge2} alt="Badge"/>
      </div>
      <div className="service__content service__content_width_half service__content_float_right">
        <h3 className="service__title">Dashboard</h3>
        <p className="paragraph service__paragraph paragraph_color_grey">
          How will my products be displayed?
        </p>
        <p className="paragraph service__paragraph paragraph_size_large">
          <strong>Dashboard</strong> to manage your store and results
        </p>
        <p className="paragraph service__paragraph paragraph_color_grey paragraph_line_high">
          Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box
        </p>
        <ul className="list stepList">
          <li className="step stepList__step">
            <img src={dot} alt="Step icon" className="step__icon"/>
            <span className="step__explanation">
              Management of roducts and branches
            </span>
          </li>
          <li className="step stepList__step">
            <img src={dot} alt="Step icon" className="step__icon"/>
            <span className="step__explanation">
              Analysis of results and reciept of orders
            </span>
          </li>
          <li className="step stepList__step">
            <img src={dot} alt="Step icon" className="step__icon"/>
            <span className="step__explanation">
              Manage Facebook page and Google analytics
            </span>
          </li>
        </ul>
        <button className="button service__button button_color_white button_back_blue button_shape_oval button_size_large buttn_color_white buttn_decoration_underline">Get Started</button>
      </div>
    </article>
  );
}

export default Dashboard;