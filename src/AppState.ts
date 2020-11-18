export enum AppStateKeys {
  WeatherSummary = 'summary',
  CurrentTemp = 'currentTemp',
  City = 'city',
  DateTime = 'dateTime',
  TempHigh = 'high',
  TempLow = 'low',
  TempMorn = 'morning',
  TempDay = 'day',
  TempEve = 'eve',
  TempNight = 'night',
  SunriseTime = 'sunrise',
  SunsetTime = 'sunset',
  Loading = 'loading',
  WeatherLoaded = 'loaded',
  Timezone = 'timezone',
}

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

export type AppState = {
  [WeatherSummary]: string;
  [CurrentTemp]: number;
  [City]: string;
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
  [Timezone]: string;
  [WeatherLoaded]: Partial<AppState>;
};

export default AppState;
