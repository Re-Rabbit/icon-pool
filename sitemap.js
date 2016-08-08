// -*- mode: react -*-
// @flow

import React from 'react'
import App from './containers/app.react.js'
import DashBoard from './containers/dashboard.react.js'
import Group from './containers/group.react.js'
import { Route, IndexRoute } from 'react-router'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashBoard} />
    <Route path="/group" component={Group} />
  </Route>
)
