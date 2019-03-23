import React from 'react';
import laptop from '../../../image/360-laptop.png';
import chair from '../../../image/chair.png';
import badge360 from '../../../image/360.png';
import modal from '../../../image/modal.png';
import eye from '../../../image/eye.png';
import './View360.scss';

const View360 = () => {
  return (
    <article className="service view360" role="article">
      <div className="service__imageContainer service__imageContainer_align_right service__imageContainer_width_third service__imageContainer_float_right">
        <img src={badge360} alt="360 badge"   className="service__360Badge image_stuck_right"/>
        <img src={laptop} alt="Laptop" className="image image_size_full image_stuck_right_viewport_large service__laptopImage"/>
        <img className="service__eye" src={eye} alt=""/>
      </div>
      <div className="service__content service__content_align_center service__content_width_half">
        <h3 className="service__title">360 view</h3>
        <p className="paragraph service__paragraph paragraph_color_grey paragraph_line_high">
          Once your customers have a fun experience using 360 technology
        </p>
        <p className="paragraph service__paragraph paragraph_size_large">
          <strong>A new shopping</strong> experience for your customers
        </p>
        <p className="paragraph service__paragraph paragraph_color_grey paragraph_line_high">
          Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box
        </p>
        <button className="button service__button button_color_white button_back_blue button_shape_oval button_size_large buttn_color_white buttn_decoration_underline">Download PDF</button>
        <button className="button button_color_white button_back_green button_shape_oval button_size_large  buttn_decoration_underline">Live Demo</button>
      </div>
      <div className="chair service__imageContainer service__imageContainer_width_third  service__imageContainer_stuck_left service__imageContainer_margin_top">
        <img className="image image_size_full chair__image" src={chair} alt="Chair"/>
        <img className="chair__modal" src={modal} alt="Modal"/>
        <div className="chair__content">
          <h4 className="chair__title">Modern Chair</h4>
          <p className="paragraph paragraph_color_grey paragraph_line_high">
            Chair is a piece of furniture with raised surface supported by legs, commonly supported most often by four legs ..
          </p>
        </div>
        <img className="chair__eye" src={eye} alt=""/>
      </div>
    </article>
  );
}

export default View360;