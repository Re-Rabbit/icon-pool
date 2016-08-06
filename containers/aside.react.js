// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow

import React, { Component } from 'react'
import { Link } from 'react-router'
import Block from 'icon-pool/containers/block.react.js'
import style from 'icon-pool/styles/aside.styl'

export default class extends Component {
  render() {
    return (
      <Block fixed="left">
        <div className={ style.aside }>
          <div><Link to="/">DashBoard</Link></div>
          <div><Link to="/group">Group</Link></div>
          <div><Link to="/temporary">Temporary</Link></div>
          <div><Link to="/tag">Tag</Link></div>
        </div>
      </Block>
    )
  }
}
