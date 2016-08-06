// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow

import React, { Component } from 'react'

function CSSLayoutFixedBlock(fixed) {
  if(!fixed) return ""
  return `block-fixed-${fixed}`
}

function CSSLayoutCenterBlock(classname) {
  if(!classname) return ""
  return `block-center ${classname}`
}


export default class extends Component {
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
