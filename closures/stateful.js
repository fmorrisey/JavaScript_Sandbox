/**
 * Stateful function has an internal state this being mutated every time it changes
 */

let foo = 0;
function addFoo() {
  foo += 1;
  return foo;
}

console.log(addFoo());
console.log(addFoo());
console.log(addFoo());
console.log(addFoo());
console.log(addFoo());
console.log(addFoo());

// --------------------------------------------------------------------- //
console.log("--------------------------------------------------------"); //
// --------------------------------------------------------------------- //

// Closure variation of the above
function getAdd() {
  let baz = 0;
  return function () {
    baz += 1;
    return baz;
  };
}

// or as function expression
const addBaz_Fe = (function getAdd() {
  let baz = 0;
  return function () {
    baz += 1;
    return baz;
  };
})();

const addBaz = getAdd();
console.log(addBaz());
console.log(addBaz());
console.log(addBaz());
console.log(addBaz());
