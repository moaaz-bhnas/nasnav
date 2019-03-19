import React from 'react';
import './Footer.scss';
import logo from '../../image/logo-blue.png';
import facebookIcon from '../../image/facebook.svg';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <img src={logo} alt="Logo" className="logo logo_size_med logo_verticalAlign_middle footer__logo" />
        <img src={facebookIcon} alt="Facebook Icon" className="facebook" />
        <p className="copyright footer__copyright">
          <small>2019 Nasorg.com All Rights Reserved</small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;