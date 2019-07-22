import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import './es6-array-methods-polyfills';
import 'core-js/features/set';
import 'core-js/features/map';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
