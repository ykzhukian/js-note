/* eslint-disable */

export const run = () => {

  console.log("********** es6 function **********");
  function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  console.log(new Point());

};

run();
