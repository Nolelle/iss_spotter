const { nextISSTimesForMyLocation } = require("./iss_promised");

const formatTimes = function (object) {
  for (let obj of object) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(obj.risetime);
    const duration = obj.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
// Call
nextISSTimesForMyLocation()
  .then((passTimes) => {
    formatTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didnt work: ", error.message);
  });
