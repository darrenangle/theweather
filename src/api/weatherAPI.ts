import {AppState} from '../AppState';

export interface LatLong {
  getLatLongFromQuery(
    query: string
  ): Promise<{lat: number; long: number; message: string}>;
}

enum GoogleStatusResponse {}

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
  status: string;
};

export class GoogleGeocodeLatLong implements LatLong {
  apiKey: string;
  endpoint: string;
  constructor(apiKey: string, endpoint: string) {
    this.apiKey = apiKey;
    this.endpoint = endpoint;
  }
  public async getLatLongFromQuery(
    query: string
  ): Promise<{lat: number; long: number; message: string}> {
    const result: GoogleGeoCodeAPIResponse = await fetch(
      `${this.endpoint}?address=${encodeURI(query)}&key=${this.apiKey}`
    )
      .then(response => response.json())
      .catch(error => {
        // @todo: replace with proper errror logging service.
        console.log(error);
        throw new Error('lat-long-api-error');
        // @todo: return an object with an error and fail better.
      });
    return {
      lat: result.results?.[0]?.geometry?.location?.lat ?? 0,
      long: result.results?.[0]?.geometry?.location?.lng ?? 0,
      message: result.status,
    };
  }
}

export default interface WeatherAPI {
  updateWeatherFromQuery(query: string): void;
}

export class GoogleMapsOpenWeatherAPI implements WeatherAPI {
  constructor(
    // @todo: don't use an appstate partial, create a new type / nested type
    private onSuccess: (result: Partial<AppState>) => void,
    private onError: (error: string) => void
  ) {}
  async updateWeatherFromQuery(query: string) {
    console.log('updateWeatherCalled');
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
