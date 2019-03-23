import React from 'react';
import laptop1 from '../../../image/laptop-1.png';
import './NavboxEditor.scss';

const NavboxEditor = () => {
  return (
    <article className="service" role="article">
      <div className="service__imageContainer service__imageContainer_shortened_viewport_small service__imageContainer_width_overHalf service__imageContainer_float_right">
        <img src={laptop1} alt="your site is always at the top" className="image image_size_full serviceImageContainer__image editor360__serviceImage"/>
      </div>
      <div className="service__content service__content_width_half service__content_float_left">
        <h3 className="service__title">Navbox Editor</h3>
        <p className="paragraph service__paragraph paragraph_color_grey">
        Navbox Editor
        </p>
        <p className="paragraph service__paragraph paragraph_size_large">
          Organize your form as you want.shaving in google sky
        </p>
        <p className="paragraph service__paragraph paragraph_color_grey paragraph_line_high">
          You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc. You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc.
        </p>
      </div>
    </article>
  );
}

export default NavboxEditor;