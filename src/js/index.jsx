import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
// import StateHook from './components/Hooks/StateHook';

import '../css/application.scss';

import './es6-notes';
import './ramda';

render(<App />, document.getElementById('app'));
// render(<StateHook />, document.getElementById('hooks'));
