// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow

import React, { Component } from 'react'
import style from 'icon-pool/styles/_title.styl'

export default class extends Component {
  render() {

    let { content, small } = this.props

    let classNames = [
      style.title,
      small ? style.titleSmall : ''
    ]

    return (
      <div className={ classNames.join(' ') }>
        { this.props.content.toUpperCase() }
      </div>
    )
  }
}
