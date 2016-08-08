// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow

import React, { Component } from 'react'
import { Link } from 'react-router'
import style from 'icon-pool/styles/main.styl'

export default class extends Component {
  render() {
    return (
      <div className={ style.main }>
        { this.props.children }
      </div>
    )
  }
}
