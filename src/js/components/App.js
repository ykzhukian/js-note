import React, { Component } from 'react'
import Grid from './Grid'
import ChinaMap from './ChinaMap'

export default class App extends Component {

  componentWillMount(){
    document.title = "A Title"
  }

  render() {
    return (
      <div className="app">
        <ChinaMap />
        {/* <div className="button">Learn More<span className="arrow"></span></div> */}
        {/* <Grid /> */}
      </div>
    )
  }
}