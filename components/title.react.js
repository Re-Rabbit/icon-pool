// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow

import React, { Component } from 'react'
import style from 'icon-pool/styles/title.styl'

export default class extends Component {
  render() {
    return (
      <div className={ style.title }>
        { this.props.content.toUpperCase() }
      </div>
    )
  }
}
