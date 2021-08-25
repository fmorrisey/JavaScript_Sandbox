/**
 * NodeJS Hook
 * @param {*} initVal - is any value that is set by the
 * @returns {*} state as a getter function and setState as a accessor function
 */

function useState(initVal) {
  let _val = initVal; // internal private variable
  const state = () => _val; //Getter function
  const setState = (newValue) => {
    _val = newValue;
  };
  return [state, setState];
}

const [count, setCount] = useState(1);
console.log(count());
setCount(2);
console.log(count());
