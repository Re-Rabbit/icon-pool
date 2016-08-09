// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow

import React, { Component } from 'react'
import style from 'icon-pool/styles/_tag-item.styl'


export default class extends Component {
  render() {

    let { tag } = this.props

    return (
      <div className={ style.tag }>
        <div className={ style.tagProgress }></div>
        {tag.name} {tag.count}
      </div>
    )
  }
}
