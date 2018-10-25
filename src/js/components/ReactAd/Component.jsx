/* eslint-disable */
import React from 'react';

// Before you create a component think:
// whether its data will be controlled or uncontrolled.

export default class Component extends React.Component {

  // ----------- Mounting (with order) -----------

  // super(props) => this.props
  constructor() {}
  static getDerivedStateFromProps() {}
  // first ++++++ render() {} +++++++
  componentDidMount() {
    setState(updater, callback);
  }


  // ----------- Updating (with order) -----------

  // return an object to update the state, or null to update nothing. right before calling the render method
  // Only case: the state depends on changes in props over time
  // Check ./YoudontneedDerivedState.jsx
  static getDerivedStateFromProps(props, state) {}
  // Note that returning false does not prevent child components from re-rendering when their state changes.
  // We do not recommend doing deep equality checks or using JSON.stringify() in shouldComponentUpdate(). It is very inefficient and will harm performance.
  // In the future React may treat shouldComponentUpdate() as a hint rather than a strict directive, and returning false may still result in a re-rendering of the component.
  shouldComponentUpdate(nextProps, nextState) {}
  // ++++++ render() {} +++++++
  // getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().
  // Capture the DOM status before the DOM is updated (more used for UI updates)
  getSnapshotBeforeUpdate(prevProps, prevState) {}
  componentDidUpdate(prevProps, prevState, snapshot) {}


  // ----------- Unmounting -----------

  componentWillUnmount() {}


  // ----------- Error Handling -----------
  // ./ErrorBoundary.jsx
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
