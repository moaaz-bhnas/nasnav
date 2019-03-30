import React from 'react';
import image1 from '../../image/slide-1.png';
import image2 from '../../image/slide-2.png';
import image3 from '../../image/slide-3.png';
import arrow from '../../image/arrow.svg';
import './Carousel.scss';

const Carousel = () => {
  const images = [image1, image2, image3];
  return (
    <div className="carousel">
      <div className="container carousel__container">
        <img src={arrow} alt="Left arrow" className="carousel__leftArrow"/>
        <ul className="list carousel__list">
          {
            images.map((image) => (
              <li key={image} className="carousel__item">
                <img src={image} alt="Fancy website built with NasNav web builder" className="image image_size_full carousel__image"/>
              </li>
            ))
          }
        </ul>
        <img src={arrow} alt="Right arrow" className="carousel__rightArrow"/>
      </div>
    </div>
  );
}

export default Carousel;