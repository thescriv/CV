import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import history from './history'

import Home from './views/Home.jsx'
import Unknown from './views/Unknown.jsx'

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route component={Unknown} />
        </Switch>
      </Router>
    )
  }
}

export default Routes