import React, { Component } from 'react';
import ControlledComponent from './ReactDoc/ControlledComponent';

export default class App extends Component {

  componentWillMount() {
    document.title = 'Yo';
  }

  render() {
    return (
      <div className="wrapper">
        <ControlledComponent />
      </div>
    );
  }
}
