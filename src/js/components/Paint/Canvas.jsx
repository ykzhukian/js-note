import React from 'react';

export default class Canvas extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    const canvas = this.ref.current;
    const context = canvas.getContext('2d');
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const radius = 75;
    const startAngle = 1.1 * Math.PI;
    const endAngle = 1.9 * Math.PI;
    const counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.stroke();

    context.beginPath();
    context.moveTo(100, 20);

    // line 1
    context.lineTo(200, 160);

    // quadratic curve
    context.quadraticCurveTo(230, 200, 250, 120);

    // bezier curve
    context.bezierCurveTo(290, -40, 300, 200, 400, 150);

    // line 2
    context.lineTo(500, 90);
    context.stroke();

    // begin custom shape
    context.beginPath();
    context.moveTo(170, 80);
    context.bezierCurveTo(130, 100, 130, 150, 230, 150);
    context.bezierCurveTo(250, 180, 320, 180, 340, 150);
    context.bezierCurveTo(420, 150, 420, 120, 390, 100);
    context.bezierCurveTo(430, 40, 370, 30, 340, 50);
    context.bezierCurveTo(320, 5, 250, 20, 250, 50);
    context.bezierCurveTo(200, 5, 150, 20, 170, 80);

    const grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    // light blue
    grd.addColorStop(0, '#8ED6FF');
    // dark blue
    grd.addColorStop(1, '#004CB3');
    // complete custom shape
    context.closePath();
    context.lineWidth = 5;
    context.fillStyle = grd;
    context.fill();
    context.strokeStyle = 'blue';
    context.stroke();

    const x2 = 188;
    const y2 = 30;
    const width = 200;
    const height = 137;
    const imageObj = new Image();

    imageObj.onload = function () {
      context.drawImage(imageObj, x2, y2, width, height);
    };
    imageObj.src = 'https://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
  }

  render() {
    return (
      <>
        <div>canvas</div>
        <canvas id="myCanvas" width="578" height="200" ref={this.ref}></canvas>
      </>
    );
  }
}
