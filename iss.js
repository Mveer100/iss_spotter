const request  = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = (callback) => {
  request("https://api.ipify.org/?format=json", (error,response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      return callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      
    }
    const IPData = JSON.parse(body);
    return callback(null, IPData['ip']);
  });
};
/*
*Makes anotherAPI request, using ip found from out first function
*/
const fetchCoordsByIP = (ip, callback) => {
  request('https://api.freegeoip.app/json/?apikey=b9f51c80-a642-11ec-9e8c-1dcde845ed46', (error, response, body) => {

    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      return callback(Error(msg), null);
    }
    const CoordData = JSON.parse(body);
    return callback(null, {latitude: CoordData.latitude, longitude: CoordData.longitude});
  });
};
const fetchFlyOverTimes = function(coords, callback) {
  request(`https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) return callback(error, null);
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      return callback(Error(msg), null);
    }
    const flyTimeData = JSON.parse(body);
    return callback(null, flyTimeData.response)
  });
}

module.exports = { fetchMyIP, fetchCoordsByIP, fetchFlyOverTimes };