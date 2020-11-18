// This Lambda is deployed and attached to an API Gateway endpoint here:
// https://42dnorruxh.execute-api.us-east-1.amazonaws.com/default/LatLongFromGoogle
// This was done to obscure the API Key in lieu of a 'real' backend.

const https = require('https');

exports.handler = async event => {
  console.log(event);
  const {queryStringParameters} = event;
  const apiKey = process.env.GOOGLEAPIKEY;
  let dataString = '';

  const response = await new Promise((resolve, reject) => {
    if (!queryStringParameters || !queryStringParameters.place) {
      resolve({
        statusCode: 400,
        body: 'Please provide a place!',
      });
    }
    const req = https.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${queryStringParameters.place}&key=${apiKey}`,
      res => {
        res.on('data', chunk => {
          dataString += chunk;
        });
        res.on('end', () => {
          resolve({
            statusCode: 200,
            body: JSON.stringify(JSON.parse(dataString), null, 4),
          });
        });
      }
    );

    req.on('error', () => {
      reject({
        statusCode: 500,
        body: 'Something went wrong!',
      });
    });
  });
  return response;
};
