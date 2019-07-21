import React from 'react';
import curve from '../../image/curve-cropped.png';
import './Header.scss';
import HeaderContent from './HeaderContent';
import HeaderImage from './HeaderImage';

const Header = (props) => {
  const {pageName, overflowHidden, contentWidth, text, imageWidth, images} = props;
  return (
    <header 
      className={`header ${pageName}Page App__header`} 
      role="banner" 
      style={{overflow: overflowHidden ? 'hidden' : null}}
    >
      <div className="container">
        <h1 className="header__title">NasNav</h1>
        <HeaderContent 
          width={contentWidth}
          text={text}
        />
        <HeaderImage 
          width={imageWidth}
          images={images}
        />
      </div>
      <img 
        className="header__curve" 
        src={curve} alt="" 
        aria-hidden="true" 
      />
    </header>
  );
}

export default Header;