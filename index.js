// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow

import React from 'react'
import { render } from 'react-dom'
import Sitemap from './sitemap.js'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import appReducer from 'icon-pool/reducers/app.reducer.js'

/**
 * Combine all the reducer.
 */
const store = createStore(
  combineReducers({
    app: appReducer,
    routing: routerReducer
  }),
  applyMiddleware(
    thunkMiddleware
  )
)

const mountNode = id => document.getElementById(id)
const history = syncHistoryWithStore(hashHistory, store)


const wrapper = rootRoute => (
  <Provider store={store}>
    <Router history={history}>
      {rootRoute}
    </Router>
  </Provider>
)

render(wrapper(Sitemap), mountNode('main'))


let unsubscribe = store.subscribe(_ => console.log(store.getState()))
