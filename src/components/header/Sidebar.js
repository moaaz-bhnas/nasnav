import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import close from '../../image/close.svg';

class Sidebar extends Component {
  // For managing focus
  firstInteractiveElement = React.createRef();
  lastInteractiveElement = React.createRef();

  componentDidMount() {
    document.body.setAttribute('data-scroll', 'false');
  }

  componentWillUnmount() {
    document.body.setAttribute('data-scroll', 'true');
  }

  trapFocus = (e, firstElement, lastElement, closeFunc) => {
    const esc = e.keyCode === 27;
    const tab = e.keyCode === 9;
    if (esc) { 
      closeFunc();
    } else if (tab && e.shiftKey && e.target === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (tab && !e.shiftKey && e.target === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }

  handleClick = (e) => {
    if (e.target.tagName === 'A') {
      this.props.closeSidebar();
    }
  }

  render() {
    const { closeSidebar } = this.props;

    return (
      <div className="sidebar" id="sidebar">
        <nav className="mobileNavbar" role="navigation">
          <h2 className="mobileNavbar__title">Mobile Navigation Bar</h2>

          <div className="sidebar__closeButtonContainer">
            <button 
              type="button"
              className="button sidebar__closeButton"
              ref={this.firstInteractiveElement}
              onClick={closeSidebar}
            >
              <img className="image sidebar__closeIcon" src={close} alt="Close"/>
            </button>
          </div>

          <ul 
            className="list mobileNavMenu"
            onKeyDown={(e) => this.trapFocus(e, this.firstInteractiveElement.current, this.lastInteractiveElement.current, closeSidebar)}
            onClick={this.handleClick}
          >
            <li className="mobileNavMenu__item">
              <Link to="/navbox" className="mobileNavMenu__link">Navbox</Link>
            </li>
            <li className="mobileNavMenu__item">
              <Link to="/navstyles" className="mobileNavMenu__link">NavStyle</Link>
            </li>
            <li className="mobileNavMenu__item">
              <Link to="/shopping" className="mobileNavMenu__link">Shopping</Link>
            </li>
            <li className="mobileNavMenu__item">
              <Link to="/360editor" className="mobileNavMenu__link">360 Editor</Link>
            </li>
            <li className="mobileNavMenu__item">
              <Link to="/dashboard" className="mobileNavMenu__link" innerRef={this.lastInteractiveElement}>Dashboard</Link>
            </li>
          </ul>
        </nav>
        <button className="button button_color_white button_back_blue sidebar__button button_shape_oval button_size_med">Get Started</button>
        <div 
          className="sidebarOverlay" 
          onClick={closeSidebar}
        />
      </div>
    );
  }
}

export default Sidebar;