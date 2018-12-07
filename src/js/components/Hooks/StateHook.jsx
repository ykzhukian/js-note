import React, { useState } from 'react';

const StateHook = () => {
  const [count, setCount] = useState(0);

  console.log(count);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default StateHook;


// function Popup({ component }) {
//   const [hide, setHide] = useState(false);
//   useEffect(() => {
//     const timeoutHandle = setTimeout(() => setHide(true), 5000);
//     return () => clearTimeout(timeoutHandle);
//   }, []);

//   return !hide ? (
//     <component />
//   ) : null;
// }
