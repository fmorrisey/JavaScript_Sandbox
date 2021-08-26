/**
 * React Hook
 * @param {*} initVal - is any value that is set by the
 * @returns {*} state as a getter function and setState as a accessor function
 */

// REACT MODULE
// Creates a React Module
const React = (function () {
  //let _val; // internal private variable
  let hooks = []; // replaced the variable with an array
  let idx = 0;
  function useState(initVal) {
    // let _val = initVal; // internal private variable
    // const state = () => _val; //Getter function
    const state = hooks[idx] || initVal; // Closes over internal values
    const _idx = idx; // Closes over the internal values
    const setState = (newValue) => {
      hooks[_idx] = newValue;
    };
    idx++;
    return [state, setState];
  }

  function workLoop() {
    idx = 0;
    render(hooks)();
    setTimeout(workLoop, 300);
  }

  setTimeout(workLoop, 300);

  function render(Component) {
    idx = 0;
    const C = Component();
    C.render();
    return C;
  }

  function useEffect(cb, depArray) {
    const oldDeps = hooks[idx];
    let hasChanged = true;
    if (oldDeps) {
      hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
    }

    if (hasChanged) cb();
    hooks[idx] = depArray;
    idx++;
  }

  return { useState, useEffect, render }; // exposes it from the module
})();

// COMPONENT
function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState("apple");

  React.useEffect(() => {
    // Uses a callback
    console.log("REAACCCTTT");
  }, [text]); // with an optional dependency array

  return {
    render: () => console.log({ count, text }),
    click: () => setCount(count + 1),
    type: (word) => setText(word),
  };
}

// INTERACTION WITH THE COMPONENT
var App = React.render(Component);
App.click();
var App = React.render(Component);
App.type("pear");
var App = React.render(Component);
