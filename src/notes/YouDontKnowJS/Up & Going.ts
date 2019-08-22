/* eslint-disable no-self-compare */
export const run = () => {

  /* ------------------ Closure ------------- */
  function makeAdder(x: number) {
    // parameter `x` is an inner variable
    // inner function `add()` uses `x`, so
    // it has a "closure" over it
    function add(y: number) {
      return y + x;
    };
    return add;
  }
  // `plusTen` gets a reference to the inner `add(..)`
  // function with closure over the `x` parameter of
  // the outer `makeAdder(..)`
  const plusTen = makeAdder(10);
  console.log(plusTen(3));

  /* ------------------ Modules ------------- */
  function user() {
    let username;
    let password;
    function doLogin(user: string, pw: string) {
      username = user;
      password = pw;
      // do the rest of the login work
      console.log(username, password);
    }
    const publicAPI = {
      login: doLogin,
    };
    return publicAPI;
  }
  // create a `User` module instance
  const fred = user();
  fred.login('fred', '12Battery34!');
  console.log(fred);

  /* ------------------ this ------------- */
  // const bar = 'global';
  // function foo() {
  //   console.log(this.bar);
  // }
  // new foo(); // undefined, new foo() sets `this` to a brand new empty object.

  /* ------------------ Prototypes ------------- */
  const foo = {
    a: 42,
  };
  // create `bar` and link it to `foo`
  const bar = Object.create(foo);
  bar.b = 'hello world';
  console.log(bar.b);
  console.log(bar.a);

  /* ------------------ Polyfilling ------------- */
  if (!Number.isNaN) {
    Number.isNaN = function isNaN(x) {
      return x !== x;
    };
  }

  /* ------------------ Transpiling (for older environments) ------------- */
  // function transpiling(a = 2) { console.log( a ); } will be transpiled to following:
  function transpiling(anything: number) {
    const a = arguments[0] !== (void 0) ? arguments[0] : 2;
    console.log(arguments)
    console.log(a);
  }
  transpiling(1);
}

run();
