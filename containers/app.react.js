// -*- mode: react -*-
// @flow


import React, { Component } from 'react'
import Aside from 'icon-pool/containers/aside.react.js'
import Main from 'icon-pool/containers/main.react.js'
import 'icon-pool/index.styl'


class App extends Component {
  render() {
    return (
      <div>
        <Aside />
        <Main>
          { this.props.children }
        </Main>
      </div>
    )
  }
}

export default App
