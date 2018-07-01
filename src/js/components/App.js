import React, { Component } from 'react'

export default class App extends Component {

  componentWillMount(){
    document.title = "A Title"
  }

  render() {
    return (
      <div>Hello React!</div>
    )
  }
}