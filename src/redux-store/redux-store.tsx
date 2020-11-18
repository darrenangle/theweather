import React from 'react';
import WeatherApp from '../App';
import AppState, {AppStateKeys} from '../AppState';
import {Provider, useSelector} from 'react-redux';
import {createStore} from 'redux';

const {
  WeatherSummary,
  CurrentTemp,
  City,
  DateTime,
  TempHigh,
  TempLow,
  TempMorn,
  TempDay,
  TempEve,
  TempNight,
  SunriseTime,
  SunsetTime,
  Loading,
  WeatherLoaded,
  Timezone,
} = AppStateKeys;

const initialState: AppState = {
  [WeatherSummary]: 'clear',
  [CurrentTemp]: 72,
  [City]: 'SOMEWHERE',
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
  [Timezone]: 'America/Chicago',
  [WeatherLoaded]: {},
};

function appReducer(
  state = initialState,
  action: {type: string; payload: unknown}
) {
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
