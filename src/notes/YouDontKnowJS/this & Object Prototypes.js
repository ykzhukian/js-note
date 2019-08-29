/* eslint-disable no-undef */
/* eslint-disable no-self-compare */
export const run = () => {

  /* ------------------ this ------------- */
  function identify() {
    return this.name.toUpperCase();
  }

  function speak() {
    const greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
  }

  const me = { name: 'Kyle' };

  console.log(identify.call(me));
  speak.call(me);

  // 每当你感觉自己正在试图使用 this 来进行词法作用域的查询时，提醒你自己：这里没有桥。

  function foo(num) {
    console.log( "foo: " + num );
  
    // 追踪 `foo` 被调用了多少次
    // 注意：由于 `foo` 的被调用方式（见下方），`this` 现在确实是 `foo`
    this.count++;
  }
  
  const f = { count: 0 };
  
  for (let i = 0; i < 10; i++) {
    if (i > 5) {
      // 使用 `call(..)`，我们可以保证 `this` 指向函数对象(`f`)
      foo.call( f, i );
    }
  }
  console.log( f.count );

  /* ------------------ Object ------------- */
  // 构造形式和字面形式的结果是完全同种类的对象。唯一真正的区别在于你可以向字面声明一次性添加一个或多个键/值对，而对于构造形式，你必须一个一个地添加属性。
  var myObj = new Object();
  myObj.key = 'value';
  console.log(myObj.toString());
  console.log(myObj instanceof Object);

  var strPrimitive = "I am a string";
  console.log( strPrimitive.length );			// 13
  console.log( strPrimitive.charAt( 3 ) );	// "m"


}

run();
