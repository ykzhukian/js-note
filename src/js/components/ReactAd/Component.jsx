/* eslint-disable */
import React from 'react';

export default class Component extends React.Component {

  // ----------- Mounting (with order) -----------
  // super(props) => this.props
  constructor() {}
  static getDerivedStateFromProps() {}
  // first render() {}
  componentDidMount() {}

  // ----------- Updating (with order) -----------
  // return an object to update the state, or null to update nothing.
  // Only case: the state depends on changes in props over time
  static getDerivedStateFromProps(props, state) {}
  // Note that returning false does not prevent child components from re-rendering when their state changes.
  // We do not recommend doing deep equality checks or using JSON.stringify() in shouldComponentUpdate(). It is very inefficient and will harm performance.
  // In the future React may treat shouldComponentUpdate() as a hint rather than a strict directive, and returning false may still result in a re-rendering of the component.
  shouldComponentUpdate(nextProps, nextState) {}
  // render() {}
  getSnapshotBeforeUpdate() {}
  componentDidUpdate(prevProps) {}

  // ----------- Unmounting -----------
  componentWillUnmount() {}

  // ----------- Error Handling -----------
  static getDerivedStateFromError() {}
  componentDidCatch() {}


  // Render method is the only required methods in a class component
  // Return on of the following: React elements, Arrays and gragments, Portals, String and numbers, Booleans or null
  // Pure function, does not modify component state, returns same result, does not directly interact with browser
  render() {
    return (
      <div>123</div>
    );
  }

}
