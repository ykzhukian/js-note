import * as R from 'ramda';

const { identity } = R;

console.log(R.map(identity, [1, 1, 2, 3]));
console.log(R.add(1, 2, 4));
