import React from 'react';
import laptop1 from '../../../image/laptop-1.png';

const NavboxEditor = () => {
  return (
    <article className="service" role="article">
      <div className="service__imageContainer service__imageContainer_shortened_viewport_small service__imageContainer_width_half service__imageContainer_float_right animated">
        <img src={laptop1} alt="your site is always at the top" className="image image_size_full serviceImageContainer__image editor360__serviceImage"/>
      </div>
      <div className="service__content service__content_width_half service__content_float_left">
        <h3 className="service__title">Easy Experience</h3>
        <p className="paragraph service__paragraph paragraph_color_grey">
          Navbox easy and fast
        </p>
        <p className="paragraph service__paragraph paragraph_size_large">
          What do you think of an easy experience!
        </p>
        <p className="paragraph service__paragraph paragraph_color_grey paragraph_line_high">
          Itaque repellat laudantium numquam. Consequuntur nihil fugit facilis. Nihil nihil numquam inventore perspiciatis iusto est iusto. Ut quasi vitae in quis.
        </p>
      </div>
    </article>
  );
}

export default NavboxEditor;