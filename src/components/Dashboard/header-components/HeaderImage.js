import React from 'react';
import computer from '../../../image/computer.png';
import './HeaderImage.scss';

const HeaderImage = () => {
  return (
    <div className="headerImageContainer 
    headerImageContainer_align_center editor360__headerImageContainer headerImageContainer_width_half">
      <img className="image headerImageContainer__computer" src={computer} alt="Computer"/>
    </div>
  );
}

export default HeaderImage;