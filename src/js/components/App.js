import React, { Component } from 'react'
import Grid from './Grid'
import Fabric from './Fabric'
import { fabric } from 'fabric'

export default class App extends Component {

  constructor() {
    super();
  }

  componentWillMount(){
    document.title = "A Title"
  }

  render() {
    return (
      <div className="app">
        <div id="map"></div>
        {/* <canvas className="draw" ref={this.draw}></canvas> */}
        {/* <canvas id="c"></canvas> */}
        {/* <div className="button">Learn More<span className="arrow"></span></div> */}
        {/* <Grid /> */}
        {/* <Fabric /> */}
      </div>
    )
  }
}