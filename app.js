// -*- mode: react -*-
// @flow


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createSelector } from 'reselect'
import { Map, List, fromJS } from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'
import style from './index.styl'

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
    icons: res
  }
}



const fetchIcons = _ => dispatch => {
  dispatch(requestIcons())

  return fetch('/api/icons')
    .then(res => res.json())
    .then(fromJS)
    .then(compose(dispatch, receiveIcons))
}


export function iconsReducer(state = initState, action) {
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

function CSSLayoutFixedBlock(fixed) {
  if(!fixed) return ""
  return `block-fixed-${fixed}`
}

function CSSLayoutCenterBlock(classname) {
  if(!classname) return ""
  return `block-center ${classname}`
}


class Block extends Component {
  render() {

    let { fixed, center } = this.props

    let classNames = [
      CSSLayoutFixedBlock(fixed),
      CSSLayoutCenterBlock(center)
    ]

    return (
      <div className={ classNames.join('') }>
        { this.props.children }
      </div>
    )
  }
}


class Icon extends Component {
  render() {
    let { icon } = this.props
    return (
      <div className={ style.icon }>
        <div className={ style.iconSvg } dangerouslySetInnerHTML={{ __html: icon.get("svg") }}></div>
        <div className={ style.iconName }>
          { icon.get("name") }
        </div>
        <div className={ style.iconCode }>
          { icon.get("code") }
        </div>
      </div>
    )
  }
}

class Aside extends Component {
  render() {
    return (
      <Block fixed="left">
        <div className={ style.aside }>
          <div class="action">E</div>
          <div class="action">A</div>
        </div>
      </Block>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <Block center={ style.main }>
        { this.props.children }
      </Block>
    )
  }
}

class App extends Component {

  props: {
    icons: Array<string>
  }


  componentDidMount() {
    let { dispatch } = this.props
    dispatch(fetchIcons())
  }

  render() {

    let iconComponent = (n, idx) => (<Icon icon={n} key={idx} />)

    return (
      <div>
        <Aside />
        <Main>
          { this.props.icons.map(iconComponent) }
        </Main>
      </div>
    )

  }

}


App.defaultProps = { icons: [] }
App.propTypes = {
  icons: ImmutablePropTypes.list
}


/// Connection


const iconsSelector = createSelector(
  state => ({ icons: state.app.icons }),
  icons => icons
)


export default connect(iconsSelector)(App)
