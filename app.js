// -*- mode: react -*-
// @flow


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createSelector } from 'reselect'
import { Map, List, fromJS } from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'
import style from './index.styl'
import Aside from 'icon-pool/containers/aside.react.js'

console.log(style)

/// MODEL

const initState = {
  icons: List()
}


/// ACTION

const REQUEST_ICONS = 'REQUEST_ICONS'
const requestIcons = _ => {
  return {
    type: REQUEST_ICONS
  }
}

const RECEIVE_ICONS = 'RECEIVE_ICONS'
const receiveIcons = res => {
  return {
    type: RECEIVE_ICONS,
    payload: {
      icons: res
    }
  }
}



const fetchIcons = _ => dispatch => {
  dispatch(requestIcons())

  return fetch('/api/icons')
    .then(res => res.json())
    .then(fromJS)
    .then(compose(dispatch, receiveIcons))
}


const TOGGLECHECKED_ICON = 'TOGGLECHECKED_ICON'
const togggleCheckedIcon = idx => {
  return {
    type: TOGGLECHECKED_ICON,
    payload: {
      idx: idx
    }
  }
}


export function iconsReducer(state = initState, action) {
  switch(action.type) {
    case REQUEST_ICONS:
      return Object.assign({}, state)
    case RECEIVE_ICONS:
      return Object.assign({}, state, {
        icons: action.payload.icons.map(n => {
          return n.set('isChecked', false)
        }),
      })
    case TOGGLECHECKED_ICON:
      let { icons } = state
      let idx = action.payload.idx
      let target = icons.get(idx)

      return Object.assign({}, state, {
        icons: icons.set(idx, target.set('isChecked', !target.get('isChecked')))
      })
    default:
      return state
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <Aside />
        { this.props.children }
      </div>
    )
  }
}

export default App
