import React from 'react';
import {AppStateKeys} from './AppState';
import SummarySun from './components/SummarySun/SummarySun';
import LocationForm from './components/LocationForm/LocationForm';
import WeatherQuote from './components/WeatherQuote/WeatherQuote';
import TodayDateTime from './components/TodayDateTime/TodayDateTime';
import HighLow from './components/HighLow/HighLow';
import DayTempRange from './components/DayTempRange/DayTempRange';
import SunriseSunset from './components/SunriseSunset/SunriseSunset';
import MainPanel from './layout-and-styles/components/MainPanel';
import WeatherAPI, {GoogleMapsOpenWeatherAPI} from './api/weatherAPI';
import DetailPanel from './layout-and-styles/components/DetailPanel';
import Themes from './layout-and-styles/theme/themes';
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

type AppProps = {
  store: GlobalStoreInteractor;
};

const WeatherApp = ({store}: AppProps) => {
  const {subscribe, update} = store;
  // @todo: pass the api in as a prop
  const api: WeatherAPI = new GoogleMapsOpenWeatherAPI(
    weather => {
      update(WeatherLoaded, weather);
      update(Loading, false);
      // pickTheme(weather.dateTime)
    },
    error => {
      // @todo: add error handling service
      console.log(error);
    }
  );

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
