import React, { Component } from 'react';
// import ControlledComponent from './ReactDoc/ControlledComponent';
// import withMouse from './ReactDoc/HOCWithMouse';
// import WithMouse from './ReactDoc/RenderPropWithMouse';
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
    return (
      <div className="wrapper">
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggleTheme} />
        </ThemeContext.Provider>
        <ThemedButton />
      </div>
    );
  }
}

export default App;
