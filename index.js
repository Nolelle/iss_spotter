// index.js
const { nextISSTimesForMyLocation } = require("./iss");

const formatTimes = function (object) {
  for (let obj of object) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(obj.risetime);
    const duration = obj.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(formatTimes(passTimes));
});
