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
import HomePage from './Home/HomePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
