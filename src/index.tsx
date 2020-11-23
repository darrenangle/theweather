import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './App';
import './layout-and-styles/reset.css';
import './layout-and-styles/fonts/fonts.css';
import './layout-and-styles/theme/theme-transition.css';

import {store, storeInteractor} from './redux-store/redux-store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WeatherApp store={storeInteractor} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
