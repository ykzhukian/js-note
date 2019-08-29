/* eslint-disable no-undef */
/* eslint-disable no-self-compare */
export const run = () => {

  /* ------------------ 编译器理论 ---------- */
  /**
   * 其一，JavaScript 引擎没有（像其他语言的编译器那样）大把的时间去优化，因为 JavaScript 的编译和其他语言不同，不是提前发生在一个构建的步骤中。
    对 JavaScript 来说，在许多情况下，编译发生在代码被执行前的仅仅几微秒之内（或更少！）。为了确保最快的性能，
    JS 引擎将使用所有的招数（比如 JIT，它可以懒编译甚至是热编译，等等），而这远超出了我们关于“作用域”的讨论。

    为了简单起见，我们可以说，任何 JavaScript 代码段在它执行之前（通常是 刚好 在它执行之前！）都必须被编译。
    所以，JS 编译器将把程序 var a = 2; 拿过来，并首先编译它，然后准备运行它，通常是立即的。
   */

  /* ------------------ Scope ------------- */
  // 作用域是一组规则，它决定了一个变量（标识符）在哪里和如何被查找。这种查询也许是为了向这个变量赋值，这时变量是一个 LHS（左手边）引用，或者是为取得它的值，这时变量是一个 RHS（右手边）引用。

  // 传统的IIFE有一种稍稍变化的形式，一些人偏好这样：(function(){ .. }())

  const bar = '123';
  const foo = true;
  if (foo) {
    { // <-- 明确的块儿
      const bar = 2 * 2;
      console.log(bar);
    }
  }
  console.log(bar);

  function hashCode(str) {
    let hash = 0;
    let i = 0;
    const len = str.length;
    while (i < len) {
      hash  = ((hash << 5) - hash + str.charCodeAt(i++)) << 0;
    }
    return hash;
  };

  function hashCode2(str) { // java String#hashCode
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash  = ((hash << 5) - hash + str.charCodeAt(i)) << 0;
    }
    return hash;
  }

  console.log(hashCode('0x00FFFFFF'))
  console.log(hashCode2('a23123123adsfasdf'))

}

run();
