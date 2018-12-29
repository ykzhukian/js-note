import React from 'react';

import Header from './SGT/Header';

export default class Sgt extends React.Component {
  render() {
    return (
      <>
        <Header />
        <img style={{ width: '100%' }} src="assets/images/sgt/banner.jpg" alt="" />
        <div style={{ height: 1500 }}></div>
      </>
    );
  }
}
