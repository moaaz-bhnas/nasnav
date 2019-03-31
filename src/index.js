import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import 'react-app-polyfill/ie9';
import './es6-polyfills';

ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.register();
