import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

import Footer from './components/footer/Footer';
import Topbar from './components/header/Topbar';
import CountrySection from './components/countries/CountrySection';

// Pages
import Home      from './pages/Home/Home';
import Navbox    from './pages/Navbox/Navbox';
import Navstyle  from './pages/Navstyle/Navstyle';
import Shopping  from './pages/Shopping/Shopping';
import Editor360 from './pages/Editor360/Editor360';
import Dashboard from './pages/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Topbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/navbox" component={Navbox} />
            <Route path="/navstyles" component={Navstyle} />
            <Route path="/shopping" component={Shopping} />
            <Route path="/360editor" component={Editor360} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
          <CountrySection />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
