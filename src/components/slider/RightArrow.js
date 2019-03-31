import React from 'react';
import rightArrow from '../../image/right-arrow.svg';
import './Arrows.scss';

const RightArrow = (props) => {
  return (
    <button 
      type="button" 
      className="button slider__rightArrow button_back_white button_shape_circle"
      onClick={props.goToNextSlide}
    >
      <img src={rightArrow} alt="Right arrow" className="slider__nextArrow"/>
    </button>
  );
}

export default RightArrow;