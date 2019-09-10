import React from 'react';
import rightArrow from '../../image/right-arrow.svg';
import './Arrows.scss';

const RightArrow = (props) => {
  return (
    <button 
      type="button" 
      aria-controls="slider__list"
      tabIndex="-1"
      className="button slider__rightArrow button_back_white button_shape_circle"
      onClick={props.goToNextSlide}
    >
      <img src={rightArrow} alt="Right arrow" className="slider__arrowIcon"/>
    </button>
  );
}

export default RightArrow;