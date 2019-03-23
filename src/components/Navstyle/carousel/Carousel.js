import React from 'react';
import image1 from '../../../image/carousel-1.png';
import image2 from '../../../image/carousel-2.png';
import image3 from '../../../image/carousel-3.png';
import arrow from '../../../image/arrow.svg';
import './Carousel.scss';

const Carousel = () => {
  return (
    <div className="carousel">
      <img src={arrow} alt="Left arrow" className="carousel__leftArrow"/>
      <ul className="list carousel__list">
        <li className="carousel__item">
          <img src={image1} alt="Fancy website built with NasNav web builder" className="image image_size_full carousel__image"/>
        </li>
        <li className="carousel__item">
          <img src={image2} alt="Fancy website built with NasNav web builder" className="image image_size_full carousel__image"/>
        </li>
        <li className="carousel__item">
          <img src={image3} alt="Fancy website built with NasNav web builder" className="image image_size_full carousel__image"/>
        </li>
      </ul>
      <img src={arrow} alt="Right arrow" className="carousel__rightArrow"/>
    </div>
  );
}

export default Carousel;