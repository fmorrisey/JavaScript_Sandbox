import { flightData } from "./data.js";

function stream(input) {
  input.forEach((entry, index) => {
    setTimeout(() => {
      console.log(entry);
    }, index * 2000);
  });
}

console.log(`Landing...`, flightData);
stream(flightData);

/**
 * ForEach setTimeOut Solution: https://stackoverflow.com/a/37977977/12888553
 */
