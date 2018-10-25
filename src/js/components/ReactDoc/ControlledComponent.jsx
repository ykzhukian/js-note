import React, { Component } from 'react';

export default class ControlledComponent extends Component {

  constructor() {
    super();
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value }, () => console.info(this.state));
  }

  render() {
    return (
      <div className="wrapper">
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

/**
 * A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".
 */

/**
* A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
*/
