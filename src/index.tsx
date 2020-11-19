import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './App';
import './layout-and-styles/reset.css';
import './layout-and-styles/fonts/fonts.css';
import './layout-and-styles/theme/theme-transition.css';

import {withReduxStore} from './redux-store/redux-store';

ReactDOM.render(
  <React.StrictMode>{withReduxStore(WeatherApp)}</React.StrictMode>,
  document.getElementById('root')
);
