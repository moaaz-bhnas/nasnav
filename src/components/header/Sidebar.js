import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

class Sidebar extends Component {
  // For managing focus
  firstLink = React.createRef();
  lastLink = React.createRef();

  componentDidMount() {
    this.firstLink.current.focus();
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

  render() {
    const {closeSidebar} = this.props;

    return (
      <div className="sidebar" id="sidebar">
        <nav className="mobileNavbar" role="navigation">
          <h2 className="mobileNavbar__title">Mobile Navigation Bar</h2>
          <ul 
            className="list mobileNavMenu"
            onKeyDown={(e) => this.trapFocus(e, this.firstLink.current, this.lastLink.current, closeSidebar)}
          >
            <li className="mobileNavMenu__item">
              <Link to="/navbox" className="mobileNavMenu__link" innerRef={this.firstLink}>Navbox</Link>
            </li>
            <li className="mobileNavMenu__item">
              <Link to="/" className="mobileNavMenu__link">NavStyle</Link>
            </li>
            <li className="mobileNavMenu__item">
              <Link to="/shopping" className="mobileNavMenu__link">Shopping</Link>
            </li>
            <li className="mobileNavMenu__item">
              <Link to="/360editor" className="mobileNavMenu__link">360 Editor</Link>
            </li>
            <li className="mobileNavMenu__item">
              <Link to="/" className="mobileNavMenu__link" innerRef={this.lastLink}>Dashboard</Link>
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