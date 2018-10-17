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
