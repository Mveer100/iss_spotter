const { fetchMyIP, fetchCoordsByIP } = require("./iss");



//fetchMyIP((error, ip) => {
//  if (error) {
//    console.log("It didn't work!" , error);
//    return;
//  }
//  console.log("It worked! Returned IP:" , ip);
//
//
//});

//fetchCoordsByIP('24.137.64.115', (error, data) => {
//  if (error) {
//    console.log("It didn't work!", error)
//    return;
//  }
//  console.log("It worked look:", data)
//});
//  It worked look: { latitude: 44.6814, longitude: -63.6571 }



module.exports = { fetchMyIP, fetchCoordsByIP };



