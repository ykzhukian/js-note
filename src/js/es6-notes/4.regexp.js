/* eslint-disable */

export const run = () => {

  console.log("********** es6 RegExp **********");
  var regex = new RegExp(/xyz/i);
  // 等价于
  var regex = /xyz/i;

  // ES6 改变了这种行为。如果RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。
  console.log(new RegExp(/abc/ig, 'i').flags) // "i"

  // ES6 对正则表达式添加了u修饰符，含义为“Unicode 模式”，用来正确处理大于\uFFFF的 Unicode 字符。

  // ES6 在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。

  // Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。
  Number.isFinite(15); // true
  Number.isFinite(0.8); // true
  Number.isFinite(NaN); // false
  Number.isFinite(Infinity); // false
  Number.isFinite(-Infinity); // false
  Number.isFinite('foo'); // false
  Number.isFinite('15'); // false
  Number.isFinite(true); // false

  // Math.trunc() 去除小数
  Math.trunc = Math.trunc || function(x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
  };

  // Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
  // Math.cbrt方法用于计算一个数的立方根。


};

run();
