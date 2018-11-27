/* eslint-disable */
import "regenerator-runtime/runtime";

export const run = () => {

  console.log("********** es6 array **********");
  console.log(...[1, 2, 3]);

  const x = 3;
  const arr = [
    ...(x > 0 ? ['a'] : []),
    'b',
  ];

  // 替代函数的 apply 方法
  // ES5 的写法
  function f(x, y, z) {
    // ...
    console.log(x, y, z);
  }
  var args1 = [0, 1, 2];
  f.apply(null, args1);

  // ES6的写法
  let args2 = [0, 1, 5, 3];
  f(...args2);

  // push 
  // ES5的 写法
  var arr1 = [0, 1, 2];
  var arr2 = [3, 4, 5];
  Array.prototype.push.apply(arr1, arr2);

  // ES6 的写法
  let arr3 = [0, 1, 2];
  let arr4 = [3, 4, 5];
  arr3.push(...arr4);

  console.log(arr1, arr3);

  // 与解构赋值结合
  const [first, ...rest] = [1, 2, 3, 4, 5];
  console.log(
    first, // 1
    rest  // [2, 3, 4, 5]
  );
  // 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
  
  // 扩展运算符还可以将字符串转为真正的数组。
  console.log([...'hello']); // [ "h", "e", "l", "l", "o" ]

  // 实现了 Iterator 接口的对象
  // Map 和 Set 结构，Generator 函数
  let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);
  
  // let arr5 = [...map.keys()]; // [1, 2, 3] keys.concat is not a function
  // console.log(arr5);

  // Generator 函数运行后，返回一个遍历器对象，因此也可以使用扩展运算符。
  const go = function*(){
    yield 1;
    yield 2;
    yield 3;
  };
  
  console.log(go); // [1, 2, 3]
  
  let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
  };
  // ES5的写法
  var arr6 = [].slice.call(arrayLike); // ['a', 'b', 'c']

  // ES6的写法
  let arr7 = Array.from(arrayLike); // ['a', 'b', 'c']
  console.log(arr6, arr7);
  

};

run();
