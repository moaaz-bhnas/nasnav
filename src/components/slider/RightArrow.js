import React from 'react';
import arrow from '../../image/arrow.svg';
import './Arrows.scss';

const RightArrow = (props) => {
  return (
    <button 
      type="button" 
      className="button slider__rightButton button_back_white button_shape_circle"
      onClick={props.goToNextSlide}
    >
      <img src={arrow} alt="Right arrow" className="slider__nextArrow"/>
    </button>
  );
}

export default RightArrow;