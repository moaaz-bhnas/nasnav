import React, { Component } from 'react';
import serviceImage1 from '../../image/dashboard-image6.png';
import serviceImage2 from '../../image/payment-methods.png';
import serviceImage3 from '../../image/dashboard-image5.png';
import './PaymentOptions.scss';
import LazyLoad from 'react-lazy-load';

class PaymentOptions extends Component {
  state = {  
    laptopImgLoaded: false,
    mobileImgLoaded: false
  }

  setLaptopLoadedToTrue = () => {
    this.setState({ laptopImgLoaded: true });
  }

  setMobileLoadedToTrue = () => {
    this.setState({ mobileImgLoaded: true });
  }

  render() {
    const { laptopImgLoaded, mobileImgLoaded } = this.state;

    return (
      <article className="service paymentOptions" role="article">
        <div className="service__imageContainer">
          <LazyLoad
            debounce={false}
            offsetVertical={500}
          >
            <img src={serviceImage1} alt="NasNav Dashboard" className={`service__image ${laptopImgLoaded ? 'loaded' : null}`} onLoad={this.setLaptopLoadedToTrue} />
          </LazyLoad>
        </div>
        <div className="service__content">
          <p className="paragraph service__paragraph paragraph_size_large">
            A few steps to add your products
          </p>
          <p className="paragraph paragraph_color_grey paragraph_line_high">
            You can create your website depending on your speciality plus Elly possibility to modify the design either clor or icons or logo etc.
          </p>
          <div className="payment">
            <span className="payment__text">Online Shopping</span>
            <img className="payment__methods" src={serviceImage2} alt="Payment methods (visa, master, discover, American Express)"/>
          </div>
          <p className="paragraph paragraph_color_grey paragraph_line_high">
            What is the correct spelling for BECONS? this word (Becons) may be misspelled. Below you can find the suggested words which we believe are check the spelling.
          </p>
        </div>
        <LazyLoad
          debounce={false}
          offsetVertical={500}
        >
          <img src={serviceImage3} alt="A website built by NasNav web builder opened on a phone" className={`service__phone ${mobileImgLoaded ? 'loaded' : null}`} onLoad={this.setMobileLoadedToTrue} />
        </LazyLoad>
      </article>
    );
  }
}

export default PaymentOptions;