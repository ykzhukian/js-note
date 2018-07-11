import React, { Component } from 'react'
import Grid from './Grid'

export default class App extends Component {

  componentWillMount(){
    document.title = "A Title"
  }

  render() {
    return (
      <div className="app">
        <div className="button">Learn More<span className="arrow"></span></div>
        {/* <Grid /> */}
      </div>
    )
  }
}