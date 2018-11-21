/* eslint-disable */

export const run = () => {

  console.log("********** es6 function **********");
  function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  console.log(new Point());

  let x = 99;
  function foo(p = x + 1) {
    console.log(p);
  }

  foo() // 100

  x = 100;
  foo() // 101

  // 写法一
  function m1({x = 0, y = 0} = {}) {
    return [x, y];
  }

  // 写法二
  function m2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
  }

  // 如果传入undefined，将触发该参数等于默认值，null则没有这个效果。
  function foo2(x = 5, y = 6) {
    console.log(x, y);
  }
  
  foo2(undefined, null); // 5 null

  // 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。
  console.log(
    foo2.name, // foo2
    (function a(a) {}).length, // 1
    (function v(a = 5) {}).length, // 0
    (function c(a = 5) {}).name, // 
    (function (a, b, c = 5) {}).length // 2
  );

  let getTempItem = id => ({ id: id, name: "Temp" });

  // 尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。

};

run();

var cool = 'not cool';
function coolF() { console.log(this.cool) };
coolF.bind({ cool: 'cool' })();
coolF.call({ cool: 'cool' });
