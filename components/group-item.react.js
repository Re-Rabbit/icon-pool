// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow

import React, { Component } from 'react'
import style from 'icon-pool/styles/group-item.styl'

export default class extends Component {
  render() {
    let { last } = this.props

    let classnames = [
      style.icon,
      last ? style.iconLast : ''
    ]

    return (
      <div className={ classnames.join(' ') }>
        ALL
      </div>
    )
  }
}
