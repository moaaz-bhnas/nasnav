import React, { Component } from 'react';
import './Slider.scss';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import slide1 from '../../image/slide-1.png';
import slide2 from '../../image/slide-2.png';
import slide3 from '../../image/slide-3.png';

class Slider extends Component {
  state = {  
    images: [slide1, slide2, slide3],
    currentIndex: 0,
    translateValue: 0
  }

  goToPreviousSlide = () => {

  }

  goToNextSlide = () => {
    const {images, currentIndex} = this.state;

    if (currentIndex === images.length-1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - this.slideWidth()
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    const {images, translateValue} = this.state;

    return (
      <div className="slider">
        <div className="slider__wrapper"
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}
        >
          {
            images.map((image, index) => (
              <Slide key={index} image={image} />
            ))
          }
        </div>
    
        <LeftArrow 
          goToPreviousSlide={this.goToPreviousSlide}
        />
        <RightArrow 
          goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}

export default Slider;