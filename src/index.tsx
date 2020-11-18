import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './App';
import './components/layout-and-styles/grid.css';
import './components/layout-and-styles/reset.css';

import {withReduxStore} from './redux-store/redux-store';

// This is where we'd do hard instantiations of something like a store.
// The app itself literally wont care about the store at all. Great.

ReactDOM.render(
  <React.StrictMode>{withReduxStore(WeatherApp)}</React.StrictMode>,
  document.getElementById('root')
);
