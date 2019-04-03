import React, { Component } from 'react';
import laptop from '../../image/360-laptop.png';
import badge360 from '../../image/360.png';
import eye from '../../image/eye.png';
import chair from '../../image/chair.png';
import popup from '../../image/modal.png';
import './ServiceWithPopup.scss';

class ServiceWithPopup extends Component {
  state = { 
    popupOpened: false
  }

  togglePopup = () => {
    this.setState((prevState) => ({
      popupOpened: !prevState.popupOpened
    }));
  }

  render() {
    const {popupOpened} = this.state;

    return (
      <article className="service view360">
        <div className="service__imageContainer">
          <img className="service__image service__image_width_full" src={laptop} alt="Laptop"/>
          <img className="service__360Badge" src={badge360} alt="360 view"/>
          <img className="service__eye" src={eye} alt=""/>
        </div>

        <div className="service__content">
          <h3 className="service__title">360 View</h3>
          <p className="paragraph paragraph_color_grey">
            Once your customers have a fun experience using 360 technology
          </p>
          <p className="paragraph service__paragraph paragraph_size_large">
            <strong>A new shopping</strong> experience for your customers
          </p>
          <p className="paragraph paragraph_color_grey paragraph_line_high">
            Here at NasNav we designed a device called the route box that plugs into a stores barcode scanner. The box picks up products UPC codes and uses that to populate a website of the products here at NasNav we designed a device called the route box
          </p>

          <button className="button service__button button_color_white button_back_blue button_shape_oval button_size_large buttn_decoration_underline">Download PDF</button>
          <button className="button service__button button_color_white button_back_green button_shape_oval button_size_large buttn_decoration_underline">Live Demo</button>
        </div>

        <div 
          className="image__container chair"
          onClick={() => {}}
        >
          <img className="chair__image" src={chair} alt="chair"/>
          <button 
            className="button chair__button"
            type="button"
            aria-controls="chair__popup chair__info"
            aria-expanded={popupOpened}
            aria-pressed={popupOpened}
            onClick={this.togglePopup}
          >
            <img className="chair__eye" src={eye} alt=""/>
          </button>
          <img className="chair__popup" id="chair__popup" src={popup} alt="popup"/>

          <div className="chair__info" id="chair__info">
            <h4 className="chair__title">Modern Chair</h4>
            <p className="paragraph chair__paragraph paragraph_color_grey">Chair is a piece of furniture with raised surface supported by legs, commonly supported most often by four legs ..</p>
          </div>
        </div>
      </article>
    );
  }
}

export default ServiceWithPopup;