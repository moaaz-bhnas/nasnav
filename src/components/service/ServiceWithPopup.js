import React, { Component } from 'react';
import laptop from '../../image/360-laptop.png';
import badge360 from '../../image/360.png';
import eye from '../../image/eye.png';
import chair from '../../image/chair.png';
import popup from '../../image/modal.png';
import './ServiceWithPopup.scss';
import LazyLoad from "react-lazy-load";

class ServiceWithPopup extends Component {
  state = { 
    popupOpened: false,
    laptopImgLoaded: false,
    chairImgLoaded: false
  }

  togglePopup = () => {
    this.setState((prevState) => ({
      popupOpened: !prevState.popupOpened
    }));
  }

  setLaptopLoadedToTrue = () => {
    this.setState({ laptopImgLoaded: true });
  }

  setChairLoadedToTrue = () => {
    this.setState({ chairImgLoaded: true });
  }

  render() {
    const { popupOpened, laptopImgLoaded, chairImgLoaded } = this.state;

    return (
      <article className="service view360">
        <div className="service__imageContainer">
          <LazyLoad
            debounce={false}
            offsetVertical={500}
            >
            <React.Fragment>
              <img className={`service__image service__image_width_full ${laptopImgLoaded ? 'loaded' : null}`} src={laptop} alt="Laptop" onLoad={this.setLaptopLoadedToTrue} />
              <img className={`service__360Badge ${laptopImgLoaded ? 'loaded' : null}`} src={badge360} alt="360 view"/>
            </React.Fragment>
          </LazyLoad>
        </div>

        <div className="service__content">
          <h3 className="service__title">360 View</h3>
          <p className="paragraph paragraph_color_grey">
            360 Virtual Tours made easy. Create, edit, share.
          </p>
          <p className="paragraph service__paragraph paragraph_size_large">
            <strong>Enhance your business</strong> listing by showcasing your Store online.
          </p>
          <p className="paragraph paragraph_color_grey paragraph_line_high">
            To deliver immersive, virtual experiences that inspire trust among consumers before they arrive. Packed with powerful features, yet simple to use. NasNav is an easy-to-use friendly solution for creating ­­360° virtual tours within your e-commerce website. 
          </p>

          <button className="button service__button button_color_white button_back_blue button_shape_oval button_size_large buttn_decoration_underline">Download PDF</button>
          <button className="button service__button button_color_white button_back_green button_shape_oval button_size_large buttn_decoration_underline">Live Demo</button>
        </div>

        <div 
          className="image__container chair"
          onClick={() => {}}
        >
          <LazyLoad
            debounce={false}
            offsetVertical={500}
          >
            <React.Fragment>
              <img className={`chair__image ${chairImgLoaded ? 'loaded' : null}`} src={chair} alt="chair" onLoad={this.setChairLoadedToTrue} />
              <button 
                className="button button_back_transparent chair__button"
                type="button"
                aria-controls="chair__popup chair__info"
                aria-expanded={popupOpened}
                aria-pressed={popupOpened}
                onClick={this.togglePopup}
              >
                <img className={`chair__eye ${chairImgLoaded ? 'loaded' : null}`} src={eye} alt=""/>
              </button>
              <img className="chair__popup" id="chair__popup" src={popup} alt="popup"/>

              <div className="chair__info" id="chair__info">
                <h4 className="chair__title">Modern Chair</h4>
                <p className="paragraph chair__paragraph paragraph_color_grey">Chair is a piece of furniture with raised surface supported by legs, commonly supported most often by four legs ..</p>
              </div>
            </React.Fragment>
          </LazyLoad>
        </div>
      </article>
    );
  }
}

export default ServiceWithPopup;