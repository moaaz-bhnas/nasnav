import React from 'react';
import screens from '../../../image/navbox-header-image.png';
import './HeaderImage.scss';

const HeaderImage = () => {
  return (
    <div className="headerImageContainer headerImageContainer_width_half">
      <img className="image headerImageContainer__screens" src={screens} alt="Screens"/>
    </div>
  );
}

export default HeaderImage;