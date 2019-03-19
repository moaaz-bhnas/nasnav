import React from 'react';
import tablet from '../../../image/home-header-tablet.png';

const HeaderImage = () => {
  return (
    <div className="headerImageContainer headerImageContainer_width_third">
      <img className="headerImageContainer__image" src={tablet} alt="Tablet"/>
    </div>
  );
}

export default HeaderImage;