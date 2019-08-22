
/* eslint-disable */

export const run = () => {

  const rr = (...x) => console.log(x);

  rr("********** es6 unicode **********");
  rr("\u0061");
  rr("\uD842\uDFB7");
  rr('u20BB7', "\u20BB7");

  // ES6 为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历。

  rr('\u01D1'.normalize());


  // includes(), startsWith(), endsWith()
  let s = 'Hello world!';

  rr("s.startsWith('Hello')", s.startsWith('Hello'));
  rr("s.endsWith('!')", s.endsWith('!!'));
  rr("s.includes('o')", s.includes('o'));

  // repeat()
  'x'.repeat(3) // "xxx"
  'na'.repeat(NaN) // "" 参数NaN等同于 0。
  'na'.repeat('na') // ""  // 如果repeat的参数是字符串，则会先转换成数字。
  'na'.repeat('3') // "nanana"

  // padStart()，padEnd()
  // 如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
  'x'.padStart(5, 'ab') // 'ababx'
  'x'.padEnd(5, 'ab') // 'xabab'

  // 模板字符串
  rr(`${s}s`);





};

run();
