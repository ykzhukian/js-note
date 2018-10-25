import React from 'react';
// PureComponents only rerender if at least one state or prop value changes.
// Change is determined by doing a shallow comparison of state and prop keys.
export default class PureComponent extends React.PureComponent {
  // State only needs to hold the current filter text value:
  state = {
    filterText: ''
  };

  handleChange = event => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    // The render method on this PureComponent is called only if
    // props.list or state.filterText has changed.
    const filteredList = this.props.list.filter(
      item => item.text.includes(this.state.filterText)
    );

    return (
      <>
        <input onChange={this.handleChange} value={this.state.filterText} />
        <ul>{filteredList.map(item => <li key={item.id}>{item.text}</li>)}</ul>
      </>
    );
  }
}

/**
 * The above approach is much cleaner and simpler than the derived state version. Occasionally, this won’t be good enough—filtering may be slow for large lists, and PureComponent won’t prevent rerenders if another prop were to change. To address both of these concerns, we could add a memoization helper to avoid unnecessarily re-filtering our list
 */
