import React from 'react';

import Header from './SGT/Header';
import Spotlight from './Paint/Spotlight';

export default class Sgt extends React.Component {
  render() {
    return (
      <>
        <Header />
        <img style={{ width: '100%' }} src="assets/images/sgt/banner.jpg" alt="" />
        <Spotlight>
          <div style={{ height: 800 }}>123123</div>
        </Spotlight>
        <Spotlight reverse>
          <div style={{ height: 800 }}>123123</div>
        </Spotlight>
        <Spotlight>
          <div style={{ height: 800 }}>123123</div>
        </Spotlight>
      </>
    );
  }
}
