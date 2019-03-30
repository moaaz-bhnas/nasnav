import React from 'react';
import arrow from '../../image/arrow.svg';
import './Arrows.scss';

const LeftArrow = (props) => {
  return (
    <button 
      type="button" 
      className="button slider__leftButton button_back_white button_shape_circle"
      onClick={props.goToPreviousSlide}
    >
      <img src={arrow} alt="Right arrow" className="slider__nextArrow"/>
    </button>
  );
}

export default LeftArrow;