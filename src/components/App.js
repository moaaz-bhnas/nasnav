import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import './App.scss';
import './Container.scss';
import './Button.scss';
import './List.scss';
import './Image.scss';
import './Paragraph.scss';
import './Intro.scss';
import './HeaderImageContainer.scss';
import './Logo.scss';
import './Link.scss';
import './ServiceSection.scss';
import './Service.scss';
import './MainContent.scss';
import HomePage from './Home/HomePage';
import NavboxPage from './Navbox/NavboxPage';
import shoppingPage from './Shopping/ShoppingPage';
import Editor360Page from './360editor/Editor360Page';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/navbox" component={NavboxPage} />
          <Route path="/shopping" component={shoppingPage} />
          <Route path="/360editor" component={Editor360Page} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
