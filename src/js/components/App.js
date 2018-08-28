import React, { Component } from 'react'
import Switch from './Switch'

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
        <Switch />
      </div>
    )
  }
}