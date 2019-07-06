import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    const { menuButtonPressed } = this.state;
    const { pathname } = this.props.location;
    const pagesNames = ['Navbox', 'NavStyles', 'Shopping', '360 Editor', 'Dashboard'];
  
    return (
      <div className="topbar App__topbar">
        <div className="container topbar__container">
          {/* Logo: always exists */}
          <Link to="/">
            <img src={logo} alt="Logo" className="logo logo_size_med topbar__logo" />
          </Link>
          {/* Menu button: mobile only */}
          <button 
            className="topbar__menuButton" 
            aria-pressed={menuButtonPressed} 
            aria-expanded={menuButtonPressed} 
            aria-controls={menuButtonPressed ? "sidebar" : null}
            onClick={this.openSidebar}
            ref={this.menuButton}
          >
            <img className="topbar__menuImage" src={menuIcon} alt="Menu Icon" />
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
              {
                pagesNames.map((pageName, index) => {
                  const formattedPageName = pageName.toLowerCase().replace(/\s/g, '');
                  return (
                    <li className="desktopNavMenu__item" key={index}>
                      <Link 
                        to={`/${formattedPageName}`} 
                        className={`desktopNavMenu__link ${pathname.includes(formattedPageName) ? 'desktopNavMenu__link_active' : null}`}
                      >{pageName}</Link>
                    </li>
                  );
                })
              }
            </ul>
          </nav>
          <button className="button button_size_med button_shape_oval button_color_blue button_back_white topbar__button">Get Started</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Topbar);