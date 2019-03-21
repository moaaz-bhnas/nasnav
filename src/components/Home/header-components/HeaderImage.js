import React from 'react';
import tablet from '../../../image/home-header-tablet.png';
import phone from '../../../image/home-header-phone.png';
import './HeaderImage.scss';

const HeaderImage = () => {
  return (
    <div className="headerImageContainer headerImageContainer_width_third">
      <img className="image headerImageContainer__tablet" src={tablet} alt="Tablet"/>
      <img className="image headerImageContainer__phone" src={phone} alt="Phone"/>
    </div>
  );
}

export default HeaderImage;