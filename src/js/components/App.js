import React, { Component } from 'react'
import Grid from './Grid'

export default class App extends Component {

  componentWillMount(){
    document.title = "A Title"
  }

  render() {
    return (
      <div>
        <Grid />
      </div>
    )
  }
}