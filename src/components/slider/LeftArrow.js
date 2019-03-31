import React from 'react';
import leftArrow from '../../image/left-arrow.svg';
import './Arrows.scss';

const LeftArrow = (props) => {
  return (
    <button 
      type="button" 
      className="button slider__leftArrow button_back_white button_shape_circle"
      onClick={props.goToPreviousSlide}
    >
      <img src={leftArrow} alt="Right arrow" className="slider__nextArrow"/>
    </button>
  );
}

export default LeftArrow;