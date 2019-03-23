import React from 'react';
import laptop3 from '../../../image/laptop-3.png';

const View360 = () => {
  return (
    <article className="service" role="article">
      <div className="service__imageContainer service__imageContainer_shortened_viewport_small service__imageContainer_width_overHalf service__imageContainer_float_left">
        <img src={laptop3} alt="your site is always at the top" className="image image_size_full serviceImageContainer__image editor360__serviceImage"/>
      </div>
      <div className="service__content service__content_width_half service__content_float_right">
        <h3 className="service__title">360 View</h3>
        <p className="paragraph service__paragraph paragraph_color_grey">
          360 view in navbox
        </p>
        <p className="paragraph service__paragraph paragraph_size_large">
          Displays all your branches and products 360 technology
        </p>
        <p className="paragraph service__paragraph paragraph_color_grey paragraph_line_high">
          Fugiat sunt quisquam. Et dolorem id magni soluta optio accusantium occaecati. Id vitae architecto. Enim dignissimos corporis sunt molestiae enim. Doloribus rem quisquam iste officia impedit voluptatum sunt aut. Vel autem reiciendis illo.
        </p>
      </div>
    </article>
  );
}

export default View360;