import React from 'react';
import AppState, {AppStateKeys} from './AppState';
import SummarySun from './components/SummarySun/SummarySun';
import LocationForm from './components/LocationForm/LocationForm';
import WeatherQuote from './components/WeatherQuote/WeatherQuote';
import TodayDateTime from './components/TodayDateTime/TodayDateTime';
import HighLow from './components/HighLow/HighLow';
import DayTempRange from './components/DayTempRange/DayTempRange';
import SunriseSunset from './components/SunriseSunset/SunriseSunset';
import MainPanel from './layout-and-styles/components/MainPanel';
import DetailPanel from './layout-and-styles/components/DetailPanel';
import pickTheme from './layout-and-styles/theme/theme-picker';
import {ThemeProvider} from 'styled-components';

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

export interface GlobalStoreInteractor {
  update: <T>(key: AppStateKeys, payload: T) => void;
  subscribe: <T>(key: AppStateKeys) => T;
}

export interface WeatherAPI {
  updateWeatherFromQuery(query: string): void;
  setOnSuccess(onSuccess: (result: Partial<AppState>) => void): void;
  setOnError(onError: (error: string) => void): void;
}

type AppProps = {
  store: GlobalStoreInteractor;
  api: WeatherAPI;
};

const WeatherApp = ({store, api}: AppProps) => {
  const {subscribe, update} = store;

  api.setOnSuccess(weather => {
    update(WeatherLoaded, weather);
    update(Loading, false);
  });
  api.setOnError(error => {
    console.log(error);
  });

  return (
    <div className="App ">
      <ThemeProvider
        theme={pickTheme(subscribe(DateTime), subscribe(Timezone))}
      >
        <MainPanel>
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
          <WeatherQuote />
        </MainPanel>
        <DetailPanel>
          <TodayDateTime
            date={subscribe(DateTime)}
            timezone={subscribe(Timezone)}
          />
          <HighLow high={subscribe(TempHigh)} low={subscribe(TempLow)} />
          <DayTempRange
            morning={subscribe(TempMorn)}
            day={subscribe(TempDay)}
            evening={subscribe(TempEve)}
            night={subscribe(TempNight)}
          />
          <SunriseSunset
            sunrise={subscribe(SunriseTime)}
            sunset={subscribe(SunsetTime)}
            timezone={subscribe(Timezone)}
          />
        </DetailPanel>
      </ThemeProvider>
    </div>
  );
};

export default WeatherApp;
