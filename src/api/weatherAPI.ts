import {AppState} from '../AppState';

export default interface WeatherAPI {
  updateWeatherFromQuery(query: string): void;
}

export type OpenWeatherOneCallAPIResponse = {
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    weather: [
      {
        main: string;
      }
    ];
  };
  daily: [
    {
      temp: {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
      };
    }
  ];
  place: string;
  timezone: string;
};

export const mapAPIDataToState = (result: OpenWeatherOneCallAPIResponse) => {
  return {
    summary: result?.current?.weather[0]?.main?.toLowerCase() ?? 'unclear',
    currentTemp: result?.current?.temp | 500,
    city:
      result?.place?.toUpperCase().replaceAll(',', ' ') ??
      'WEATHER UNPREDICTABLE: CHECK THE LOGS',
    dateTime: result?.current?.dt
      ? new Date(result?.current?.dt * 1000)
      : new Date(),
    high: result?.daily[0]?.temp?.max | 0,
    low: result?.daily[0]?.temp?.min | 0,
    morning: result?.daily[0]?.temp?.morn | 0,
    day: result?.daily[0]?.temp?.morn | 0,
    eve: result?.daily[0]?.temp?.eve | 0,
    night: result?.daily[0]?.temp?.night | 0,
    sunrise: result?.current?.sunrise
      ? new Date(result?.current?.sunrise * 1000)
      : new Date(),
    sunset: result?.current?.sunset
      ? new Date(result?.current?.sunset * 1000)
      : new Date(),
    timezone: result?.timezone ?? 'America/Chicago',
  };
};

export async function getWeather(query: string): Promise<Partial<AppState>> {
  return await fetch(
    `https://42dnorruxh.execute-api.us-east-1.amazonaws.com/default/LatLongFromGoogle?place=${encodeURI(
      query
    )}`
  )
    .then(response => response.json())
    .then((result: OpenWeatherOneCallAPIResponse) => {
      return {
        summary: result.current?.weather[0]?.main?.toLowerCase() ?? 'unclear',
        currentTemp: result.current?.temp | 0 ?? 0,
        city:
          result.place?.toUpperCase().replaceAll(',', ' ') ??
          'WEATHER UNPREDICTABLE: CHECK THE LOGS',
        dateTime: new Date(result.current?.dt * 1000) ?? new Date(),
        high: result.daily[0]?.temp?.max | 0 ?? 0,
        low: result.daily[0]?.temp?.min | 0 ?? 0,
        morning: result.daily[0]?.temp?.morn | 0 ?? 0,
        day: result.daily[0]?.temp?.morn | 0 ?? 0,
        eve: result.daily[0]?.temp?.eve | 0 ?? 0,
        night: result.daily[0]?.temp?.night | 0 ?? 0,
        sunrise: new Date(result.current?.sunrise * 1000) ?? new Date(),
        sunset: new Date(result.current?.sunset * 1000) ?? new Date(),
        timezone: result.timezone ?? 'America/Chicago',
      };
    })
    .catch(error => {
      console.log(error);
      return {
        summary: 'error',
        currentTemp: 500,
        city: 'WEATHER UNPREDICTABLE: CHECK THE LOGS',
        dateTime: new Date(),
        high: 0,
        low: 0,
        morning: 0,
        day: 0,
        eve: 0,
        night: 0,
        sunrise: new Date(),
        sunset: new Date(),
      };
    });
}

export class GoogleMapsOpenWeatherAPI implements WeatherAPI {
  constructor(
    private onSuccess: (result: Partial<AppState>) => void,
    private onError: (error: string) => void,
    public getWeatherFromBackend: (
      query: string
    ) => Promise<Partial<AppState>> = getWeather
  ) {}
  async updateWeatherFromQuery(query: string) {
    return await this.getWeatherFromBackend(query)
      .then(data => this.onSuccess(data))
      .catch(error => this.onError(error));
  }
}
