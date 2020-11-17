import React, {ChangeEvent} from 'react';
import './App.css';
import AppStateKeys from './AppStateKeys';
import SummarySun from './components/SummarySun/SummarySun';
import LocationForm from './components/LocationForm/LocationForm';

const {
  SomeText,
  WeatherSummary,
  CurrentTemp,
  City,
  DateTime,
  LocationQuery,
  TempHigh,
  TempLow,
  TempMorn,
  TempDay,
  TempEve,
  TempNight,
  SunriseTime,
  SunsetTime,
  Loading,
} = AppStateKeys;

export type AppState = {
  [SomeText]: string;
  [WeatherSummary]: string;
  [CurrentTemp]: number;
  [City]: string;
  [LocationQuery]: number;
  [DateTime]: Date;
  [TempHigh]: number;
  [TempLow]: number;
  [TempMorn]: number;
  [TempDay]: number;
  [TempEve]: number;
  [TempNight]: number;
  [SunriseTime]: Date;
  [SunsetTime]: Date;
  [Loading]: boolean;
};

export interface GlobalStoreInteractor {
  update: <T>(key: AppStateKeys, payload: T) => void;
  subscribe: <T>(key: AppStateKeys) => T;
}

type AppProps = {
  store: GlobalStoreInteractor;
};

const WeatherApp = ({store}: AppProps) => {
  const {subscribe, update} = store;

  return (
    <div className="App">
      <LocationForm
        submit={(query: string) => {
          update(LocationQuery, query);
        }}
        loading={subscribe(Loading)}
      />
      <SummarySun
        currentTemp={subscribe(CurrentTemp)}
        summary={subscribe(WeatherSummary)}
        city={subscribe(City)}
      />
    </div>
  );
};

export default WeatherApp;
