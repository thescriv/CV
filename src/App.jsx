import React, { Component } from 'react'
import { Router } from 'react-router-dom'

import Routes from './Routes.jsx'
import history from './history.jsx'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Routes />
      </Router>
    )
  }
}

export default App
