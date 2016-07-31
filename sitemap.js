// -*- mode: react -*-


import React from 'react'
import App, { getIcons } from './app.js'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'


const store = createStore(
  combineReducers({
    app: getIcons,
    routing: routerReducer
  }),
  applyMiddleware(
    thunkMiddleware
  )
)

let unsubscribe = store.subscribe(_ => console.log(store.getState()))


const history = syncHistoryWithStore(hashHistory, store)

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
)
