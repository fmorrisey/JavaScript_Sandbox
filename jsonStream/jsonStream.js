import { flightData } from "./data.js";

var timeStamp;
var system_nominal = "color: #bada55";
var system_warn = "color: yellow;";
var system_abnormal = "color: red";

function stream(input) {
  var now, output;
  input.forEach((entry, index) => {
    setTimeout(() => {
      now = getTime();
      entry.time.earth_local = now;
      output = `Mars | ${entry.time.mars_local} \n
                Earth| ${entry.time.earth_local}`;
      output += `\n %c ${entry.system}`;

      if (entry.system === "nominal") {
        console.log(output, system_nominal);
      }
      if (entry.system === "warn") {
        console.log(output, system_warn);
      }
      if (entry.system === "abnormal") {
        console.log(output, system_abnormal);
      }
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
