import React from 'react';

export default class Focus extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    // const canvas = this.ref.current;
    // canvas
  }

  render() {
    return (
      <>
        <div>canvas</div>
        <div>canvas</div>
        <div>canvas</div>
        <div>canvas</div>
        <div>canvas</div>
      </>
    );
  }
}
