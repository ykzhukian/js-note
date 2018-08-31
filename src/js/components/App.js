import React, { Component } from 'react'
import Capsule from './Capsule'

export default class App extends Component {

  constructor() {
    super();
  }

  componentWillMount(){
    document.title = "Yo"
  }

  render() {
    return (
      <div className="app">
        {/* <Switch /> */}
        <Capsule />
      </div>
    )
  }
}