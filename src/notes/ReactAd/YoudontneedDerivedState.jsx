// There is only one case that you need to use derived state: (getDerivedStateFromProps)
// It enables a component to update its internal state as the result of changes in props!
import React from 'react';

// Anti-pattern: Unconditionally copying props to state
//                    this.state.x = this.props.x
//                    this.setState({ x }) is going to be override by new props.x

// 1. Fully controlled component
const EmailInput = props => <input type="text" onChange={props.onChange} value={props.email} />;

// 2. Fully uncontrolled component with a key
class EmailInputUncontrolled extends React.Component {
  state = { email: this.props.defaultEmail };

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return <input onChange={this.handleChange} value={this.state.email} />;
  }
}
/** Usage:
<EmailInput
  defaultEmail={this.props.user.email}
  key={this.props.user.id}
/>
Better to use the key on form,
When a key changes, React will create a new component instance rather than update the current one.
*/

// 3. Use Memoization
// ./Memoization.jsx

export { EmailInput, EmailInputUncontrolled };
