import React, { Component } from 'react';
import ControlledComponent from './ReactDoc/ControlledComponent';
import withMouse from './ReactDoc/HOCWithMouse';
import WithMouse from './ReactDoc/RenderPropWithMouse';
import { ThemeContext, themes } from './ReactDoc/ThemeContext';
import ThemedButton from './ReactDoc/ThemedButton';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
    };
  }

  componentWillMount() {
    document.title = 'Yo';
  }

  render() {
    const { x, y } = this.props.mouse;
    return (
      <div className="wrapper">
        <ControlledComponent />
        <h1>
          The mouse is at &nbsp;
          {x}
          ,&nbsp;
          {y}
        </h1>
        <WithMouse render={({ x: px, y: py }) => (
          <h2>
            {px}
            ,&nbsp;
            {py}
          </h2>
        )}
        />
        <ThemeContext.Provider value={this.state.theme}>
          <button
            type="button"
            onClick={this.toggleTheme}
          >
            Change Theme
          </button>
        </ThemeContext.Provider>
        <ThemedButton />
      </div>
    );
  }
}

export default withMouse(App);
