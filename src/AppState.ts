export enum AppStateKeys {
  SomeText = 'someText',
  WeatherSummary = 'summary',
  CurrentTemp = 'currentTemp',
  City = 'city',
  LocationQuery = 'query',
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
}

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
  [WeatherLoaded]: Partial<AppState>;
};

export default AppState;
