import AppState, {AppStateKeys} from '../AppState';
import {useSelector} from 'react-redux';
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
  [CurrentTemp]: 99,
  [City]: 'SOMEWHERE, USA',
  [DateTime]: new Date(),
  [TempHigh]: 99,
  [TempLow]: 99,
  [TempMorn]: 99,
  [TempDay]: 99,
  [TempEve]: 99,
  [TempNight]: 99,
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

export const store = createStore(appReducer);

export const storeInteractor = {
  update: function <T>(key: AppStateKeys, payload: T): void {
    store.dispatch({type: key, payload});
  },
  subscribe: function <T>(key: AppStateKeys): T {
    const selector = (state: typeof initialState) => state[key];
    return (useSelector(selector) as unknown) as T;
  },
};
