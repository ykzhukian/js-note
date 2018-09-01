import React, { Component } from 'react'
import Capsule from './Capsule'
import Header from './IKKS/Header'
import Home from './IKKS/Home'

export default class App extends Component {

  constructor() {
    super();
  }

  componentWillMount(){
    document.title = "Yo"
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Home />
        {/* <Switch /> */}
        {/* <Capsule /> */}
      </div>
    )
  }
}