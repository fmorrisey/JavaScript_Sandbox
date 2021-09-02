import { flightData } from "./data.js";

var timeStamp;

function stream(input) {
  var now, output;
  input.forEach((entry, index) => {
    setTimeout(() => {
      entry.time.earth_local = getTime();

      output =
        `Mars | ${entry.time.mars_local} \n` +
        `Earth| ${entry.time.earth_local}\n` +
        `${entry.coordinates.location} | ${entry.coordinates.distance} mtrs\n` +
        `%c${entry.system}`;
      systemOut(output, entry);
    }, index * 2000);
  });
}

function systemOut(output, entry) {
  var system_nominal = "color: #bada55",
    system_warn = "color: yellow;",
    system_abnormal = "color: red";

  entry.system === "nominal" // Nominal SysStat
    ? console.log(output, system_nominal)
    : entry.system === "warn" // Warn SysStat
    ? console.log(output, system_warn)
    : entry.system === "abnormal" // Abnormal SysStat
    ? console.log(output, system_abnormal)
    : console.log(output); // Default

  if (
    entry.coordinates.location === "surface" &&
    entry.coordinates.distance < 5 &&
    entry.system === "nominal"
  ) {
    console.log("LANDING SUCCESSFUL!!!!!!!!");
  }

  if (entry.coordinates.location === "surface" && entry.system === "abnormal") {
    console.log("%cABNORMAL LANDING \n Check Vehicle Status", system_abnormal);
  }
}

function getTime() {
  return (timeStamp = new Date().toISOString());
}

console.log(`Landing...`, flightData);
stream(flightData);

/**
 * ForEach setTimeOut Solution: https://stackoverflow.com/a/37977977/12888553
 */
