import React from 'react';
import Topbar from './Topbar';
import curve from '../../image/curve-cropped.png';
import './Header.scss';

const Header = (props) => {
  const {overflowHidden} = props;
  return (
    <header 
      className="header App__header" 
      role="banner" 
      style={{overflow: overflowHidden ? 'hidden' : null}}
    >
      <h1 className="header__title">NasNav</h1>
      <div className="container">
        <Topbar />
        {props.intro} {/* <Intro /> */}
        {props.headerImage}
      </div>
      <img 
        className="header__curve" 
        src={curve} alt="" 
        aria-hidden="true" 
        style={{zIndex: overflowHidden ? 1 : null}} 
      />
    </header>
  );
}

export default Header;