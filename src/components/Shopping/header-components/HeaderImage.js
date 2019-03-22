import React from 'react';
import phone from '../../../image/shopping-header-image.png';
import './HeaderImage.scss';

const HeaderImage = () => {
  return (
    <div className="headerImageContainer headerImageContainer_width_half">
      <img className="headerImageContainer__shoppingImage" src={phone} alt="Screens"/>
    </div>
  );
}

export default HeaderImage;