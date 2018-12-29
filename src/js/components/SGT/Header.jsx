import React from 'react';

import Menu from './Menu';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  render() {
    return (
      <header className="header">
        <div className="section section--header row">
          <div className="col col-md-4 vertical-center">
            <div className="flex">
              <div className="menu-trigger vertical-center" onClick={this.toggle}>
                <img src="assets/images/sgt/icons/menu.svg" alt="breadcrumb" />
              </div>
              <div className="language-switch ml-5">
                <span>En</span>
              </div>
            </div>
          </div>
          <div className="col col-md-4 logo">
            <img src="assets/images/sgt/logo.svg" alt="logo" />
          </div>
          <div className="col col-md-4 vertical-center">
            <div className="search">
              <img src="assets/images/sgt/icons/search.svg" alt="search" />
            </div>
          </div>
        </div>
        <Menu open={this.state.menuOpen} />
      </header>
    );
  }
}
