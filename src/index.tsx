import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherApp from './App';
import reportWebVitals from './reportWebVitals';

import {withReduxStore} from './redux-store/redux-store';

// This is where we'd do hard instantiations of something like a store.
// The app itself literally wont care about the store at all. Great.

ReactDOM.render(
  <React.StrictMode>{withReduxStore(WeatherApp)}</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
