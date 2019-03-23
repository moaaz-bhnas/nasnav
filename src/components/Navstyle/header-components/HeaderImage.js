import React from 'react';
import styles from '../../../image/styles-image.png';
import './HeaderImage.scss';

const HeaderImage = () => {
  return (
    <div className="headerImageContainer 
    headerImageContainer_align_right styles__headerImageContainer headerImageContainer_width_half">
      <img className="image headerImageContainer__styles" src={styles} alt="Computer"/>
    </div>
  );
}

export default HeaderImage;