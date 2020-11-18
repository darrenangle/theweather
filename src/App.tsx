import React from 'react';
import './App.css';
import {AppStateKeys} from './AppState';
import SummarySun from './components/SummarySun/SummarySun';
import LocationForm from './components/LocationForm/LocationForm';
import WeatherAPI, {GoogleMapsOpenWeatherAPI} from './api/weatherAPI';

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
  WeatherLoaded,
} = AppStateKeys;

export interface GlobalStoreInteractor {
  update: <T>(key: AppStateKeys, payload: T) => void;
  subscribe: <T>(key: AppStateKeys) => T;
}

type AppProps = {
  store: GlobalStoreInteractor;
};

const WeatherApp = ({store}: AppProps) => {
  const {subscribe, update} = store;
  const api: WeatherAPI = new GoogleMapsOpenWeatherAPI(
    weather => {
      update(WeatherLoaded, weather);
      update(Loading, false);
    },
    error => {
      console.log(error);
    }
  );
  return (
    <div className="App">
      <LocationForm
        submit={(query: string) => {
          update(Loading, true);
          api.updateWeatherFromQuery(query);
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
