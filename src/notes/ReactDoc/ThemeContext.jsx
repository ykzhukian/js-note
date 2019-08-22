import React from 'react';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.

/*
It might feel redundant to pass down the user and avatarSize props through many levels if in the end only the Avatar component really needs it. It’s also annoying that whenever the Avatar component needs more props from the top, you have to add them at all the intermediate levels too.

One way to solve this issue without context is to pass down the Avatar component itself so that the intermediate components don’t need to know about the user prop
*/

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = React.createContext({
  theme: themes.dark, // default
  toggleTheme: () => {},
});
