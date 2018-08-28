import React from 'react';

const Switch = () => (
  <div className="switch-wrapper" onClick={() => {
    const left = document.querySelector('.switch-item-left');
    const right = document.querySelector('.switch-item-right');
    left.classList.remove('switch-item-left');
    left.classList.add('switch-item-right');
    right.classList.remove('switch-item-right');
    right.classList.add('switch-item-left');
    }} >
    <div className="switch-item switch-item-left">
      <div>left</div>
    </div>
    <div className="switch-item switch-item-right">
      <div>right</div>
    </div>
  </div>
);

export default Switch;
