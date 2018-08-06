import React, { Component } from 'react'
import { fabric } from 'fabric'

export default class App extends Component {

  componentDidMount() {
    // const canvas = this.draw.current;
    // const ctx = canvas.getContext('2d');

    // ctx.fillStyle = "blue"
    // ctx.fillRect(100, 100, 20, 20)

    const fcanvas = new fabric.Canvas('c');
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20,
      angle: 45,
      selection: true
    })
    
    fcanvas.add(rect);

    setTimeout(() => {
      rect.animate('angle', 145, {
        onChange: fcanvas.renderAll.bind(fcanvas),
        duration: 1000,
        easing: fabric.util.ease.easeInCubic
      })
    }, 1000)    
  }

  render() {
    return (
      <canvas id="c"></canvas>
    )
  }
}