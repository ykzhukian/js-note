import React from 'react';

export default class Spotlight extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.draw);
  }

  draw() {
    const canvas = this.ref.current;
    const canvasTop = canvas ? canvas.getBoundingClientRect().top : -1;
    const positionX = canvasTop > 550 ? 550 : canvasTop < -550 ? -550 : canvasTop; // eslint-disable-line

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const leftPosX = canvas.width / 1.5 + positionX;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(leftPosX, canvas.height);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();

    const rightPosX = canvas.width / 1.1 + positionX;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(rightPosX, canvas.height);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  render() {
    return (
      <>
        <div>canvas</div>
        <canvas id="myCanvas" width="800" height="1500" ref={this.ref}></canvas>
      </>
    );
  }
}
