import React from 'react';
import './HeaderImage.scss';

const HeaderImage = (props) => {
  const {images, width} = props;
  return (
    <div className={`header__imageContainer header__content_widthOnLargeViewport_${width}`}>
      {
        images.map((image) => (
          <img key={image.src} src={image.src} alt={image.alt} className="header__image"/>
        ))
      }
    </div>
  );
}

export default HeaderImage;