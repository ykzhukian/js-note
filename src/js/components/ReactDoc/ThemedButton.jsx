import React from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedButton = props => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        return (
          <button
            {...props}
            onClick={toggleTheme}
            style={{ backgroundColor: theme.background, color: theme.foreground }}
          >
            Theme color
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemedButton;
