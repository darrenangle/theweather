import {OpenWeatherOneCallAPIResponse, mapAPIDataToState} from './weatherAPI';

describe('mapAPIDataToState', () => {
  test('#mapAPIDataToState: should default when called with null', () => {
    const defaultResult = {
      summary: 'unclear',
      currentTemp: 500,
      city: 'WEATHER UNPREDICTABLE: CHECK THE LOGS',
      dateTime: new Date('01 January 0 00:00:00 UTC'),
      high: 0,
      low: 0,
      morning: 0,
      day: 0,
      eve: 0,
      night: 0,
      sunrise: new Date('01 January 0 00:00:00 UTC'),
      sunset: new Date('01 January 0 00:00:00 UTC'),
      timezone: 'America/Chicago',
    };
    const result = mapAPIDataToState(null);

    expect(result).toEqual(defaultResult);
  });
  test('#mapAPIDataToState: should default when called with undefined', () => {
    const defaultResult = {
      summary: 'unclear',
      currentTemp: 500,
      city: 'WEATHER UNPREDICTABLE: CHECK THE LOGS',
      dateTime: new Date('01 January 0 00:00:00 UTC'),
      high: 0,
      low: 0,
      morning: 0,
      day: 0,
      eve: 0,
      night: 0,
      sunrise: new Date('01 January 0 00:00:00 UTC'),
      sunset: new Date('01 January 0 00:00:00 UTC'),
      timezone: 'America/Chicago',
    };
    const result = mapAPIDataToState(undefined);
    expect(result).toEqual(defaultResult);
  });
  test('#mapAPIDataToState: should default when called with undefined', () => {
    const apiResponse: OpenWeatherOneCallAPIResponse = {
      lat: 41.88,
      lon: -87.63,
      timezone: 'America/Chicago',
      timezone_offset: -21600,
      current: {
        dt: 1606747819,
        sunrise: 1606741100,
        sunset: 1606774852,
        temp: 31.84,
        feels_like: 20.68,
        pressure: 1015,
        humidity: 62,
        dew_point: 21.61,
        uvi: 0.48,
        clouds: 100,
        visibility: 10000,
        wind_speed: 11.01,
        wind_deg: 5,
        wind_gust: 15.01,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
      },
      daily: [
        {
          dt: 1606755600,
          sunrise: 1606741100,
          sunset: 1606774852,
          temp: {
            day: 32.4,
            min: 31.12,
            max: 38.05,
            night: 31.12,
            eve: 33.35,
            morn: 33.57,
          },
          feels_like: {
            day: 16,
            night: 17.29,
            eve: 18.73,
            morn: 17.65,
          },
          pressure: 1015,
          humidity: 86,
          dew_point: 29.07,
          wind_speed: 21.97,
          wind_deg: 345,
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          clouds: 100,
          pop: 0.43,
          uvi: 1.43,
        },
      ],
      place: 'Chicago, IL, USA',
    };
    const result = mapAPIDataToState(apiResponse);
    expect(result).toEqual({
      city: 'CHICAGO IL USA',
      currentTemp: 31,
      dateTime: new Date('2020-11-30T14:50:19.000Z'),
      day: 33,
      eve: 33,
      high: 38,
      low: 31,
      morning: 33,
      night: 31,
      summary: 'clouds',
      sunrise: new Date('2020-11-30T12:58:20.000Z'),
      sunset: new Date('2020-11-30T22:20:52.000Z'),
      timezone: 'America/Chicago',
    });
  });
});
