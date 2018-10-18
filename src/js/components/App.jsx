import React, { Component } from 'react';
import ControlledComponent from './ReactDoc/ControlledComponent';
import withMouse from './ReactDoc/HOCWithMouse';

class App extends Component {

  componentWillMount() {
    document.title = 'Yo';
  }

  render() {
    const { x, y } = this.props.mouse;
    console.log(this.props);
    return (
      <div className="wrapper">
        <ControlledComponent />
        <h1>
          The mouse is at &nbsp;
          {x}
          ,&nbsp;
          {y}
        </h1>
      </div>
    );
  }
}

export default withMouse(App);
