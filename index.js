// -*- mode: react -*-
// @flow

import React from 'react'
import { render } from 'react-dom'
import Sitemap from './sitemap.js'
import { iconsReducer } from './app.js'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'


const store = createStore(
  combineReducers({
    app: iconsReducer,
    routing: routerReducer
  }),
  applyMiddleware(
    thunkMiddleware
  )
)
const mountNode = id => document.getElementById(id)
const history = syncHistoryWithStore(hashHistory, store)


let unsubscribe = store.subscribe(_ => console.log(store.getState()))


const wrapper = rootRoute => (
  <Provider store={store}>
    <Router history={history}>
      {rootRoute}
    </Router>
  </Provider>
)






render(wrapper(Sitemap), mountNode('main'))


