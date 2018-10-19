import React from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedButton = props => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        console.log(theme);
        return (
          <button
            {...props}
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
