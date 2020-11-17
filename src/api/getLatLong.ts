export default interface LatLong {
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
