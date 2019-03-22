import React from 'react';
import screen from '../../../image/marketing-image.png';

const Marketing = () => {
  return (
    <article className="service" role="article">
      <div className="service__imageContainer service__imageContainer_shortened_viewport_small service__imageContainer_width_overHalf  service__imageContainer_float_right">
        <img src={screen} alt="your site is always at the top" className="image image_size_full serviceImageContainer__image"/>
      </div>
      <div className="service__content service__content_width_half service__content_float_left">
        <h3 className="service__title">Marketing</h3>
        <p className="paragraph service__paragraph paragraph_color_grey">
          Loyalty system
        </p>
        <p className="paragraph service__paragraph paragraph_size_large">
          Loyalty programs are structured marketing startegies
        </p>
        <p className="paragraph service__paragraph paragraph_color_grey paragraph_line_high">
          In marketing generally and in retailing more specifically, aloyality card, reward card, points card, advantage card, or club card is a blastic or paper card, visually similar to a credit card
        </p>
        <p className="paragraph service__paragraph paragraph_color_grey paragraph_line_high">
          By presenting such a card, purchasers typically earn future purchases.
        </p>
        <button className="button button_color_white button_back_blue button_shape_oval button_size_large buttn_decoration_underline">Get Started</button>
      </div>
    </article>
  );
}

export default Marketing;