/* eslint-disable */
import React from 'react';

// React.memo is a higher order component. It’s similar to React.PureComponent but for function components instead of classes.
const Memo = React.memo(function Memo() {
  /* render using props */
}, areEqual);

// optional
function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
}

export default Memo;
