const https = require('https');

exports.handler = async event => {
  console.log(event);
  const googleApiKey = process.env.GOOGLEAPIKEY;
  const weatherApiKey = process.env.WEATHERAPIKEY;
  let dataString = '';

  const response = await new Promise((resolve, reject) => {
    const {queryStringParameters} = event;
    if (!queryStringParameters || !queryStringParameters.place) {
      resolve({
        statusCode: 400,
        body: 'Please provide a place!',
      });
    }
    const req = https.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${queryStringParameters.place}&key=${googleApiKey}`,
      res => {
        res.on('data', chunk => {
          dataString += chunk;
        });
        res.on('end', () => {
          let weatherString = '';
          const geocode = JSON.parse(dataString);
          const lat = geocode.results[0].geometry.location.lat;
          const lng = geocode.results[0].geometry.location.lng;

          const reqw = https.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,alerts&appid=${weatherApiKey}`,
            resw => {
              resw.on('data', chunk => {
                weatherString += chunk;
              });
              resw.on('end', () => {
                resolve({
                  statusCode: 200,
                  body: JSON.stringify(JSON.parse(weatherString), null, 4),
                });
              });
            }
          );
          reqw.on('error', e => {
            reject({
              statusCode: 500,
              body: 'Something went wrong with the weather api.',
            });
          });
        });
      }
    );

    req.on('error', e => {
      reject({
        statusCode: 500,
        body: 'Something went wrong with the lat long api.',
      });
    });
  });
  return response;
};
