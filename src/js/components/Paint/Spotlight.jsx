import React from 'react';

export default class Spotlight extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.draw = this.draw.bind(this);
    this.dur = 0;
  }

  componentDidMount() {
    window.requestAnimationFrame(this.draw);
  }

  draw() {
    this.dur++;
    const canvas = this.ref.current;
    const canvasTop = canvas ? canvas.getBoundingClientRect().top : -1;
    const positionX = canvasTop > 550 ? 550 : canvasTop < -550 ? -550 : canvasTop; // eslint-disable-line

    let dur = this.dur / 1000 * 3;

    if (dur >= 2.3) this.dur = 0;
    if (dur >= 1.2) dur = 2.4 - dur;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grd.addColorStop(0, 'rgba(180, 180, 180, 0.1)');
    grd.addColorStop(0.25 * dur, 'rgba(180, 180, 180, 0.5)');
    grd.addColorStop(0.5 * dur, 'rgba(180, 180, 180, 0.1)');
    grd.addColorStop(0.75 * dur, 'rgba(180, 180, 180, 0.5)');
    grd.addColorStop(1, 'rgba(180, 180, 180, 0.1)');

    const leftPosX = canvas.width / 1.5 + positionX;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(leftPosX, canvas.height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = grd;
    ctx.stroke();

    const rightPosX = canvas.width / 1.1 + positionX;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(rightPosX, canvas.height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = grd;
    ctx.stroke();

    window.requestAnimationFrame(this.draw);
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
