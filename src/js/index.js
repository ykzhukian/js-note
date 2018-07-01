import React, { Component } from 'react'
import { render } from 'react-dom'

import App from './components/App'

import '../css/application.scss'

render(
    <App />,
    document.getElementById('app')
);