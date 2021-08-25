/**
 * React Hook
 * @param {*} initVal - is any value that is set by the
 * @returns {*} state as a getter function and setState as a accessor function
 */

// REACT MODULE
// Creates a React Module
const React = (function () {
  let _val; // internal private variable
  function useState(initVal) {
    // let _val = initVal; // internal private variable
    // const state = () => _val; //Getter function
    const state = _val || initVal; // Closes over internal values
    const setState = (newValue) => {
      _val = newValue;
    };
    return [state, setState];
  }

  function render(Component) {
    const C = Component();
    C.render();
    return C;
  }

  return { useState, render }; // exposes it from the module
})();

// COMPONENT
function Component() {
  const [count, setCount] = React.useState(1);
  return {
    render: () => console.log(count),
    click: () => setCount(count + 1),
  };
}

// INTERACTION WITH THE COMPONENT
var App = React.render(Component);
App.click();
var App = React.render(Component);
