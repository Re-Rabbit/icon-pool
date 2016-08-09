// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow

import React, { Component } from 'react'
import style from 'icon-pool/styles/_group-item.styl'

export default class extends Component {
  render() {
    let { group, last } = this.props

    let classNames = [
      style.icon,
      last ? style.iconLast : ''
    ]

    return (
      <div className={ classNames.join(' ') }>
        <div className={ style.iconIconContianer }>
          <div className={ style.iconIcon }></div>
        </div>
        <div className={ style.iconLabelContainer }>
          <div className={ style.iconLabel }>
            <span className={ style.iconLabelNumber }>10</span>
            ICONS
          </div>
        </div>
        { group }
      </div>
    )
  }
}
