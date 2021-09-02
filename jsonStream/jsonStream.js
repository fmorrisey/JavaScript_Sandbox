import { flightData } from "./data.js";

var timeStamp;

function stream(input) {
  var now, output;
  input.forEach((entry, index) => {
    setTimeout(() => {
      now = getTime();
      entry.time.earth_local = now;
      output = `Mars | ${entry.time.mars_local} \nEarth| ${entry.time.earth_local}`;

      console.log(output);
    }, index * 2000);
  });
}

console.log(`Landing...`, flightData);
stream(flightData);

function getTime() {
  return (timeStamp = new Date().toISOString());
}

console.log(now);

/**
 * ForEach setTimeOut Solution: https://stackoverflow.com/a/37977977/12888553
 */
