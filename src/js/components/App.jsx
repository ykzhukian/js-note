import React, { Component } from 'react';
import ControlledComponent from './ReactDoc/ControlledComponent';
import withMouse from './ReactDoc/HOCWithMouse';
import WithMouse from './ReactDoc/RenderPropWithMouse';

class App extends Component {

  componentWillMount() {
    document.title = 'Yo';
  }

  render() {
    const { x, y } = this.props.mouse;
    return (
      <div className="wrapper">
        <ControlledComponent />
        <h1>
          The mouse is at &nbsp;
          {x}
          ,&nbsp;
          {y}
        </h1>
        <WithMouse render={({ x: px, y: py }) => (
          <h2>
            {px}
            ,&nbsp;
            {py}
          </h2>
        )}
        />
      </div>
    );
  }
}

export default withMouse(App);
