import React from 'react';
import * as dat from 'dat.gui';

export default class DatGui extends React.Component {
  gui = new dat.GUI();
  state = {
    name: 'Sam',
  }

  componentDidMount() {
    this.gui.addFolder('flow field');

    const person = { name: this.state.name };
    this.gui.add(person, 'name').onFinishChange((name: string) => {
      this.setState({ name });
    });
  }
  render() {
    return (
      <div>{this.state.name}</div>
    );
  }
}
