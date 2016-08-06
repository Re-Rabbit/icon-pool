// -*- mode: react -*-
// @flow


import React, { Component } from 'react'
import Aside from 'icon-pool/containers/aside.react.js'
import './index.styl'


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
