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
    const result = mapAPIDataToState(
      (null as unknown) as OpenWeatherOneCallAPIResponse
    );

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
    const result = mapAPIDataToState(
      (undefined as unknown) as OpenWeatherOneCallAPIResponse
    );
    expect(result).toEqual(defaultResult);
  });
  test('#mapAPIDataToState: should map data when valid response received', () => {
    const apiResponse: OpenWeatherOneCallAPIResponse = {
      timezone: 'America/Chicago',
      current: {
        dt: 1606747819,
        sunrise: 1606741100,
        sunset: 1606774852,
        temp: 31.84,
        weather: [
          {
            main: 'Clouds',
          },
        ],
      },
      daily: [
        {
          temp: {
            day: 32.4,
            min: 31.12,
            max: 38.05,
            night: 31.12,
            eve: 33.35,
            morn: 33.57,
          },
        },
      ],
      place: 'Chicago, IL, USA',
    };

    expect(mapAPIDataToState(apiResponse)).toEqual({
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
