import React from 'react';
import styles from '../../../image/styles-image.png';
import './Styles2.scss';

const Styles2 = () => {
  return (
    <article className="service styles2" role="article">
      <div className="service__imageContainer  service__imageContainer_width_lessThanHalf service__imageContainer_float_left">
        <img src={styles} alt="your site is always at the top" className="image image_size_full serviceImageContainer__image"/>
      </div>
      <div className="service__content service__content_width_overHalf service__content_float_right">
        <h3 className="service__title">Various styles</h3>
        <p className="paragraph service__paragraph paragraph_color_grey">
        You'll get the device wherever you are
        </p>
        <p className="paragraph service__paragraph paragraph_size_large">
          <strong>Multiple</strong> forms you can modify to suit your needs and customers
        </p>
        <p className="paragraph service__paragraph paragraph_color_grey paragraph_line_high">
          You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc. You can create your website depending on your speciality plus Elly possibility to modify the design either color or icons or logo, etc.
        </p>
        <button className="button button_color_white button_back_blue button_shape_oval button_size_large buttn_decoration_underline">Download PDF</button>
      </div>
    </article>
  );
}

export default Styles2;