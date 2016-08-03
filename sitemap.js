// -*- mode: react -*-
// @flow

import React from 'react'
import App from './app.js'
import DashBoard from './containers/dashboard.react.js'
import { Route, IndexRoute } from 'react-router'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashBoard} />
  </Route>
)
