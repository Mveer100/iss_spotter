const { fetchMyIP, fetchCoordsByIP, fetchFlyOverTimes } = require("./iss");



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
const coords = {longitude: 44.6814, latitude: -63.6571}

fetchFlyOverTimes(coords, (error, data) => {
  if (error) {
    console.log("Error:", error)
  }
  console.log(data)
})

function(fetchFlyOverTimes())




