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
    const canvas = this.ref.current;
    const parent = canvas.parentNode.getBoundingClientRect();
    canvas.width = parent.width;
    canvas.height = parent.height;
  }

  draw() {
    this.dur++;
    const canvas = this.ref.current;
    const canvasTop = canvas ? canvas.getBoundingClientRect().top : -1;
    const positionX = canvasTop > 550 ? 550 : canvasTop < -550 ? -550 : canvasTop; // eslint-disable-line

    const { reverse } = this.props;

    console.log(positionX);

    let dur = this.dur / 1000 * 3;

    if (dur >= 2.3) this.dur = 0;
    if (dur >= 1.2) dur = 2.4 - dur;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

    const color1 = 'rgba(180, 180, 180, 0)';
    const color2 = 'rgba(255, 255, 255, 0.3)';

    grd.addColorStop(0, color1);
    grd.addColorStop(0.25 * dur, color2);
    grd.addColorStop(0.5 * dur, color1);
    grd.addColorStop(0.75 * dur, color2);
    grd.addColorStop(1, color1);

    const grd2 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grd2.addColorStop(0, color2);
    grd2.addColorStop(0.25 * dur, color1);
    grd2.addColorStop(0.5 * dur, color2);
    grd2.addColorStop(0.75 * dur, color1);
    grd2.addColorStop(1, color2);

    const leftPosX = canvas.width + positionX;
    ctx.beginPath();
    ctx.moveTo(reverse ? canvas.width + 20 : -20, 0);
    ctx.lineTo(reverse ? -leftPosX : leftPosX, canvas.height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = grd;
    ctx.stroke();

    const rightPosX = canvas.width / 0.3 + positionX;
    ctx.beginPath();
    ctx.moveTo(reverse ? canvas.width - 20 : 20, 0);
    ctx.lineTo(rightPosX, reverse ? 0 : canvas.width);
    ctx.shadowBlur = 1;
    ctx.shadowColor = 'grey';
    ctx.strokeStyle = grd2;
    ctx.stroke();

    window.requestAnimationFrame(this.draw);
  }

  render() {
    return (
      <div className="spotlight-bg">
        <canvas ref={this.ref}></canvas>
        {this.props.children}
      </div>
    );
  }
}
