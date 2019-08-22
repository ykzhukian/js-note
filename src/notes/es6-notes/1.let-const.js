/* eslint-disable */

export const run = () => {

  console.log("********** es6 let const **********");

  var a = [];
  for (var i = 0; i < 10; i++) {
    a[i] = function () {
      console.log(i);
    };
  }
  a[6](); // 10

  var b = [];
  for (let i = 0; i < 10; i++) {
    b[i] = function () {
      console.log(i);
    };
  }
  b[6](); // 6

  // 另外，for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
  for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i); // abc
  }

  // 没有变量提升
  console.log(foo); // 报错ReferenceError
  let foo = 2;

  // 暂时性死区 temporal dead zone TDZ
  var tmp = 123;
  if (true) {
    tmp = 'abc'; // ReferenceError
    let tmp;
  }

  function bar(x = 2, y = x) {
    return [x, y];
  }
  console.log(bar()); // [2, 2]

  // 不允许重复声明
  function func(arg) {
    {
      let arg = 1; // 不报错
      console.log(arg);
    }
  }
  func(2);

  // 块级作用域 
  function f1() {
    let n = 5;
    if (true) {
      let n = 10;
    }
    console.log(n); // 5
  }

  // 从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。
  var a = 1;
  // 如果在 Node 的 REPL 环境，可以写成 global.a
  // 或者采用通用方法，写成 this.a
  window.a // 1

  let d = 1;
  window.d // undefined
  
};

run();
