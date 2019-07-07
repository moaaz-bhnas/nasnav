import React, { Component } from 'react';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import './Slider.scss';
import CountryDetails from '../countries/CountryDetails';

class Slider extends Component {
  state = {  
    currentIndex: 0,
    translateValue: 0
  }

  firstSlide = React.createRef();

  slideWidth = () => {
    return this.firstSlide.current.offsetWidth;
  }

  goToPreviousSlide = () => {
    const {currentIndex} = this.state;
    if (currentIndex !== 0) {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }));
    }
  }

  goToNextSlide = () => {
    const {slides, visibleSlidesNum} = this.props;
    const {currentIndex} = this.state;
    if ((currentIndex + (visibleSlidesNum-1)) === slides.length-1) { // Reached the last slide
      this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    } else {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue - this.slideWidth()
      }));
    }
  }

  handleKeyDown = (e) => {
    const left = 37;
    const right = 39;

    if (e.keyCode === left) {
      this.goToPreviousSlide();
    } else if (e.keyCode === right) {
      this.goToNextSlide();
    }
  }

  render() {
    const {sliderType, sliderSize, slides} = this.props;
    const {translateValue} = this.state;

    return (
      <div 
        className={`slider App__slider ${sliderType} ${sliderSize}`}
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
        onClick={() => {}}
      >
        <div className="slider__wrapper">
          <ul 
            className="list slider__list"
            id="slider__list"
            style={{
              transform: `translateX(${translateValue}px)`
            }}
          >
            {
              slides.map((slide, index) => (
                <li key={index} className="slide" ref={index === 0 ? this.firstSlide : null}>
                  {
                    (sliderType === 'styleSlider') ?
                    <img src={slide.src} alt={slide.alt} className="slide__image"/> :
                    <CountryDetails 
                      name={slide.name}
                      location={slide.location}
                      phone={slide.phone}
                      mail={slide.mail}
                    />
                  }
                </li>
              ))
            }
          </ul>
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