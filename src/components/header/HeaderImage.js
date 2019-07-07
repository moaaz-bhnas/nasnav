import React from 'react';
import './HeaderImage.scss';

const HeaderImage = (props) => {
  const {images, width} = props;
  return (
    <div className={`header__imageContainer header__content_widthOnLargeViewport_${width}`}>
      {
        images.map((image) => (
          <picture className="header__image" key={image.alt}>
            <source srcSet={image.sm} media="(max-width: 450px)" />
            <img src={image.lg} alt={image.alt} />
          </picture>
        ))
      }
    </div>
  );
}

export default HeaderImage;