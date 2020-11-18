import React from 'react';
import WeatherApp from '../App';
import AppState, {AppStateKeys} from '../AppState';
import {Provider, useSelector} from 'react-redux';
import {createStore} from 'redux';

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
  WeatherLoaded,
} = AppStateKeys;

const initialState: AppState = {
  [SomeText]: 'Hello from the redux Store',
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
  [WeatherLoaded]: {},
};

function appReducer(
  state = initialState,
  action: {type: string; payload: unknown}
) {
  console.log(action);
  // @todd: break up reducers into multiple and combineReducers()
  switch (action.type) {
    case WeatherLoaded:
      return Object.assign({}, state, action.payload as Partial<AppState>);
      break;
    case Loading:
      return {
        ...state,
        [Loading]: action.payload as boolean,
      };
      break;
    default:
      return state;
  }
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
