// -*- mode: react -*-

import React, { Component } from 'react'
import { connect } from 'react-redux'



/// MODEL

const initState = {
  icons: []
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
    icons: res
  }
}


const fetchIcons = _ => dispatch => {
  dispatch(requestIcons())

  return fetch('/api/icons')
    .then(res => res.json())
    .then(res => dispatch(receiveIcons(res)))
}


export function getIcons(state = initState, action) {
  switch(action.type) {
    case REQUEST_ICONS:
      return Object.assign({}, state)
    case RECEIVE_ICONS:
      return Object.assign({}, state, { icons: action.icons })
    default:
      return state
  }
}



/// VIEW

class Icon extends Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.icon}}></div>
    )
  }
}

class App extends Component {
  componentDidMount() {
    let { dispatch } = this.props
    dispatch(fetchIcons())
  }
  render() {
    return (
      <div>
        {
          this.props.icons.map(
            n => <Icon icon={n} />
          )
        }
      </div>
    )
  }
}



function select(state) {
  return {
    icons: state.app.icons
  }
}


export default connect(select)(App)
