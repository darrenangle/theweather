import {AppState} from '../AppState';

export default interface WeatherAPI {
  updateWeatherFromQuery(query: string): void;
}

type GoogleGeoCodeAPIResponse = {
  results: [
    {
      geometry: {
        location: {
          lat: number;
          lng: number;
        };
      };
    }
  ];
  status:
    | 'OK'
    | 'ZERO_RESULTS'
    | 'OVER_DAILY_LIMIT'
    | 'OVER_QUERY_LIMIT'
    | 'REQUEST_DENIED'
    | 'INVALID_REQUEST'
    | 'UNKNOWN_ERROR';
};

type OpenWeatherOneCallAPIResponse = {};

export class GoogleMapsOpenWeatherAPI implements WeatherAPI {
  constructor(
    // @todo: don't use an appstate partial, create a new type / nested type
    private onSuccess: (result: Partial<AppState>) => void,
    private onError: (error: string) => void
  ) {}
  async updateWeatherFromQuery(query: string) {
    const latLong = await fetch(
      `https://42dnorruxh.execute-api.us-east-1.amazonaws.com/default/LatLongFromGoogle?place=${encodeURI(
        query
      )}`
    )
      .then(response => response.json())
      .then((result: GoogleGeoCodeAPIResponse) => {
        return {
          lat: result.results?.[0]?.geometry?.location?.lat ?? 0,
          long: result.results?.[0]?.geometry?.location?.lng ?? 0,
          message: result.status ?? 'NO_STATUS',
        };
      })
      .catch(error => {
        console.log(error);
      });

    return await Promise.resolve({
      summary: 'Clear',
      currentTemp: 99,
      city: 'Chicago',
      dateTime: new Date(),
      high: 99,
      low: 85,
      morning: 91,
      day: 98,
      eve: 85,
      night: 88,
      sunrise: new Date(),
      sunset: new Date(),
    } as Partial<AppState>)
      .then(data => this.onSuccess(data))
      .catch(error => this.onError(error));
  }
}
