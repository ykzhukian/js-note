import React from 'react';
import { render } from 'react-dom';

import { sum } from './utils';

import App from './components/App';

import '../css/application.scss';

console.log(sum);

render(<App />, document.getElementById('app'));
