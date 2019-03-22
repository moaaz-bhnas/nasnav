import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';
import menuIcon from '../../image/menu-button.svg';
import './Topbar.scss';
import Sidebar from './Sidebar';

class Topbar extends Component {
  state = {  
    menuButtonPressed: false
  }

  // To focus after the sidebar is closed (focus management)
  menuButton = React.createRef();

  openSidebar = () => {
    this.setState({
      menuButtonPressed: true
    });
  }

  closeSidebar = () => {
    this.setState({
      menuButtonPressed: false
    });

    this.menuButton.current.focus();
  }

  render() {
    const {menuButtonPressed} = this.state;
  
    return (
      <div className="topbar header__topbar">
        {/* Logo: always exists */}
        <Link to="/">
          <img src={logo} alt="Logo" className="logo logo_size_med topbar__logo" />
        </Link>
        {/* Menu button: mobile only */}
        <button 
          className="menuButton topbar__menuButton" 
          aria-pressed={menuButtonPressed} 
          aria-expanded={menuButtonPressed} 
          aria-controls="sidebar"
          onClick={this.openSidebar}
          ref={this.menuButton}
        >
          <img className="image image_size_full" src={menuIcon} alt="Menu Icon" />
        </button>
        {/* Sidebar: mobile only when menu button is clicked */}
        {
          menuButtonPressed &&
          <Sidebar closeSidebar={this.closeSidebar} />              
        }
        {/* Desktop navbar: desktop only */}
        <nav className="desktopNavbar" role="navigation">
          <h2 className="desktopNavbar__title">Desktop Navigation Bar</h2>
          <ul className="list desktopNavMenu">
            <li className="desktopNavMenu__item">
              <Link to="/navbox" className="desktopNavMenu__link">Navbox</Link>
            </li>
            <li className="desktopNavMenu__item">
              <Link to="/" className="desktopNavMenu__link">NavStyle</Link>
            </li>
            <li className="desktopNavMenu__item">
              <Link to="/" className="desktopNavMenu__link">Shopping</Link>
            </li>
            <li className="desktopNavMenu__item">
              <Link to="/" className="desktopNavMenu__link">360 Editor</Link>
            </li>
            <li className="desktopNavMenu__item">
              <Link to="/" className="desktopNavMenu__link">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <button className="button button_size_med button_shape_oval button_color_blue button_back_white topbar__button">Get Started</button>
      </div>
    );
  }
}

export default Topbar;