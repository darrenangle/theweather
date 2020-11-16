import React, {ChangeEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import AppStateKeys from './AppStateKeys';
import SummarySun from './components/SummarySun/SummarySun';

const {
  SomeText,
  WeatherSummary,
  CurrentTemp,
  City,
  DateTime,
  ZipCode,
  TempHigh,
  TempLow,
  TempMorn,
  TempDay,
  TempEve,
  TempNight,
  SunriseTime,
  SunsetTime,
} = AppStateKeys;

export type AppState = {
  [SomeText]: string;
  [WeatherSummary]: string;
  [CurrentTemp]: number;
  [City]: string;
  [ZipCode]: number;
  [DateTime]: Date;
  [TempHigh]: number;
  [TempLow]: number;
  [TempMorn]: number;
  [TempDay]: number;
  [TempEve]: number;
  [TempNight]: number;
  [SunriseTime]: Date;
  [SunsetTime]: Date;
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

  const text = subscribe<string>(SomeText) ?? 'default';

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    update<string>(SomeText, event?.target?.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{text}</p>
      </header>
      <input type="text" onChange={handleChange} />
      <SummarySun
        currentTemp={subscribe(CurrentTemp)}
        summary={subscribe(WeatherSummary)}
        city={subscribe(City)}
      />
    </div>
  );
};

export default WeatherApp;
