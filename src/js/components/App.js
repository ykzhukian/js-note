import React, { Component } from 'react'
import Capsule from './Capsule'
import Header from './IKKS/Header'
import Home from './IKKS/Home'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
    this.checkbox = React.createRef();
  }

  componentWillMount(){
    document.title = "Yo"
  }

  componentDidMount() {
    console.log('did mount', this.checkbox.current.checked);
  }

  componentWillUpdate() {
    this.checkbox.current.checked = false;
  }

  render() {
    console.log(this.checkbox);
    return (
      <div className="wrapper">
        {/* <Capsule /> */}
        <input type="checkbox" ref={this.checkbox} onChange={() => { this.setState({ checked: !this.state.checked }) }} />
      </div>
    )
  }
}