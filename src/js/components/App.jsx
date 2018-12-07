import React, { Component } from 'react';
import ControlledComponent from './ReactDoc/ControlledComponent';
import withMouse from './ReactDoc/HOCWithMouse';
import WithMouse from './ReactDoc/RenderPropWithMouse';
import { ThemeContext, themes } from './ReactDoc/ThemeContext';
import ThemedButton from './ReactDoc/ThemedButton';
import Modal from './ReactDoc/PortalModal';
import PureComponent from './ReactAd/PureComponent';
import Memoization from './ReactAd/Memoization';
import './ReactTest/TestRenderer';
import Spotlight from './Paint/Spotlight';
import StateHook from './Hooks/StateHook';

const list = [
  { id: 1, text: 'a' },
  { id: 2, text: 'b' },
  { id: 3, text: 'c' },
  { id: 4, text: 'd' },
];

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
      toggleTheme: this.toggleTheme,
    };
    this.interlude = React.createRef();
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     if (this.interlude.current) {
  //       setInterval(() => {
  //         this.interlude.current.classList.toggle('active');
  //       }, 3000);
  //     }
  //   }, 2000);
  // }

  // To enable sytax like following, you need to use @babel/plugin-proposal-class-properties
  // state = {
  //   theme: themes.light,
  //   toggleTheme: this.toggleTheme,
  // };
  // inputRef = React.createRef();

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
        <ThemeContext.Provider value={this.state}>
          <ThemedButton />
        </ThemeContext.Provider>
        <StateHook />
        <Modal>
          <>
            <div>1</div>
            <div>2</div>
          </>
          <div>modal content</div>
          <Spotlight />
        </Modal>
        <div>PureComponent</div>
        <PureComponent list={list} />
        <div>Memoization</div>
        <Memoization list={list} />
        <div className="interlude" ref={this.interlude}>
          <span></span>
        </div>
      </div>
    );
  }
}

export default withMouse(App);
