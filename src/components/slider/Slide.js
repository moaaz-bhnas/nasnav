import React from 'react';
import './Slide.scss';

const Slide = (props) => {
  return (
    <img src={props.image} alt="" className="slider__slide"/>
  );
}

export default Slide;