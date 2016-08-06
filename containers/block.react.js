// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow

import React, { Component } from 'react'
import style from 'icon-pool/styles/block.styl'

console.log(style)

function CSSLayoutFixedBlock(fixed) {
  if(!fixed) return ""
  switch(fixed) {
    case 'top': return style.blockFixedTop
    case 'right': return style.blockFixedRight
    case 'bottom': return style.blockFixedBottom
    case 'left': return style.blockFixedLeft
  }
}

function CSSLayoutCenterBlock(classname) {
  if(!classname) return ""
  return `${style.blockCenter} ${classname}`
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
