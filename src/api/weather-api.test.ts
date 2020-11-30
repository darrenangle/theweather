import {OpenWeatherOneCallAPIResponse, mapAPIDataToState} from './weatherAPI';

describe('mapAPIDataToState', () => {
  test('#mapAPIDataToState: should default', () => {
    const defaultResult = {
      summary: 'unclear',
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
      timezone: 'America/Chicago',
    };
    const result = mapAPIDataToState(null);
    expect(result).toEqual(defaultResult);
  });
});
