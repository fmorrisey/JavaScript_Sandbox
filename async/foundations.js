/**
 * Map Function
 */
const names = ["Bob", "Rob", "Slob"];
const greetings = names.map((name) => `Hello ${name}`);
// the map function uses a callback function
console.log(greetings);
//----------------------------------------------------------------
/**
 * Arrow and Callback Function
 @param {name} name
 @callback greet  
 These are useful for small or short async function calls
*/

let greet = (name) => console.log(`hello ${name}`);

greet("Jon");

const userInfo = (firstName, lastName, callback) => {
  const fullName = `${firstName} ${lastName}`;
  callback(fullName);
};

userInfo("John", "Doe", greet);
//----------------------------------------------------------------
/**
 * Promises
 *
 */

// Meeting Object
let meetingDetails = {
  name: "name",
  location: "location",
  time: "time",
};

// Meeting conditional
const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    meetingDetails = {
      name: "Marketing Meeting",
      location: "Zoom",
      time: "2015-12-01T00:00:00:00",
    };
    resolve(meetingDetails);
  }
  if (hasMeeting) {
    reject(new Error("Meeting already exists"));
  }
});

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
  return Promise.resolve(calender);
};

meeting
  .then(addToCalender)
  .then((res) => {
    console.log("Meeting Scheduled");
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

//----------------------------------------------------------------

/**
 * Promise All
 */

const promise1 = Promise.resolve("Promise 1 complete");
const promise2 = new Promise((res, rej) => {
  try {
    setTimeout(() => {
      res("Promise 2 complete");
    }, 2000);
  } catch (error) {
    rej(error);
  }
});

Promise.all([promise1, promise2]).then((res) => {
  console.log(res);
});

// Promise.race() will only return the first

//----------------------------------------------------------------
/**
 * Generator Functions
 * @param {*} fn
 * @returns
 */

function* generatorFunc() {
  let data = getData();
  yield data;
  console.log(data);
}

//----------------------------------------------------------------
/**
 * Express Style Methods
 */

//HOF for Error Catching
const catchError = (fn) => {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

// Api call
const getOrder = async (req, res, next) => {
  const orders = Orders.find({ email: re.user.email });
  if (!orders.length) throw new Error("No orders found");
};

// We wrap our routes in one error catch
// any errors get passed along to next()
router.get("/orders", catchError(getOrder));

// NodeJs style error handling
Process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error);
});

//----------------------------------------------------------------
