/* eslint-disable */
import "regenerator-runtime/runtime";

export const run = () => {

  console.log("********** es6 destructuring **********");

  let [foo, [[bar], baz]] = [1, [[2], 3]];
  console.log(foo, bar, baz); // 1 2 3

  let [head, ...tail] = [1, 2, 3, 4];
  console.log(tail);

  // 事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
  let [x, y, z] = new Set(['a', 'b', 'c']);
  console.log(x); // "a"

  function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  let [first, second, third, fourth, fifth, sixth] = fibs();
  console.log(sixth); // 5

  // 解构赋值允许指定默认值。
  let [q, w = 'b'] = ['a']; // q='a', w='b'
  console.log(q, w);

  let [x2 = 1] = [null];
  console.log(x2) // null

  // 默认表达式
  function f() {
    console.log('aaa');
  }

  let [x3 = f()] = [1];

  // 对象的解构赋值
  const { foo: baz2 } = { fooo: '' }
  console.log(baz2);

  // 下面是嵌套赋值的例子。
  let obj = {};
  let arr = [];

  ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

  console.log(obj); // {prop:123}
  console.log(arr) // [true]

  // 对象的解构也可以指定默认值
  var { x: y3 = 3 } = { x: 5 };
  console.log(y3) // 5

  // 如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。

  // 如果要将一个已经声明的变量用于解构赋值，必须非常小心。
  let x4;
  ({x4} = {x4: 1});
  console.log(x4);

  // 字符串的解构赋值
  const [h, e, l1, l2, o] = 'hello';
  console.log([h, e, l1, l2, o]);

  // 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
  let {length : len} = 'hello';
  console.log(len) // 5

  function move({x, y} = { x: 0, y: 0 }) {
    console.log([x, y]);
  }
  
  move({x: 3, y: 8}); // [3, 8]
  move({x: 3}); // [3, undefined]
  move({}); // [undefined, undefined]
  move(); // [0, 0]

  console.log([1,2,3,4,5].reduce((a, b) => a + b));

  [1, undefined, 3].map((x = 'yes') => x);
  // [ 1, 'yes', 3 ]

  // 用途
  // （1）交换变量的值
  let l = 1;
  let r = 2;
  
  [l, r] = [r, l];
  console.log([l, r]);
  
  // （2）从函数返回多个值
  // （3）函数参数的定义
  // （4）提取 JSON 数据
  // （5）函数参数的默认值
  // （6）遍历 Map 结构
  // （7）输入模块的指定方法
};

run();
