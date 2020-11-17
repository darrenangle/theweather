import React from 'react';
import WeatherApp, {AppState} from '../App';
import AppStateKeys from '../AppStateKeys';
import {Provider, useSelector} from 'react-redux';
import {createStore} from 'redux';

// const asyncFunctionMiddleware = storeAPI => next => action => {
//   if (typeof action === 'function') {
//     return action(storeAPI.dispatch);
//   }
//   return next(action);
// };

const {
  SomeText,
  WeatherSummary,
  CurrentTemp,
  City,
  DateTime,
  TempHigh,
  LocationQuery,
  TempLow,
  TempMorn,
  TempDay,
  TempEve,
  TempNight,
  SunriseTime,
  SunsetTime,
  Loading,
} = AppStateKeys;

const initialState: AppState = {
  [SomeText]: "Hi did you know we're using redux?",
  [WeatherSummary]: 'clear',
  [CurrentTemp]: 90,
  [City]: 'Chicago',
  [LocationQuery]: 0,
  [DateTime]: new Date(),
  [TempHigh]: 99,
  [TempLow]: 54,
  [TempMorn]: 82,
  [TempDay]: 99,
  [TempEve]: 87,
  [TempNight]: 62,
  [SunriseTime]: new Date(),
  [SunsetTime]: new Date(),
  [Loading]: false,
};

function appReducer(
  state = initialState,
  action: {type: string; payload: unknown}
) {
  if (action.type === SomeText) {
    return {
      ...state,
      [SomeText]: action.payload as string,
      [City]: 'San Francisco',
    };
  }
  return state;
}

const store = createStore(appReducer);

const storeInteractor = {
  update: function <T>(key: AppStateKeys, payload: T): void {
    store.dispatch({type: key, payload});
  },
  subscribe: function <T>(key: AppStateKeys): T {
    const selector = (state: typeof initialState) => state[key];
    return (useSelector(selector) as unknown) as T;
  },
};

export const withReduxStore = (App: typeof WeatherApp) => (
  <Provider store={store}>
    <App store={storeInteractor} />
  </Provider>
);
