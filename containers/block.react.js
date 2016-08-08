// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow


import React, { Component } from 'react'
import style from 'icon-pool/styles/block.styl'



function CSSLayoutFixedBlock(fixed) {
  if(!fixed) return ""
  switch(fixed) {
    case 'top': return style.blockFixedTop
    case 'right': return style.blockFixedRight
    case 'bottom': return style.blockFixedBottom
    case 'left': return style.blockFixedLeft
    default: return style.blockFixed
  }
}

function CSSLayoutCenterBlock(classname) {
  if(!classname) return ""
  return `${style.blockCenter} ${classname}`
}

function CSSLayoutCenterRow(row) {
  if(!row) return ""
  return style.blockRow
}

function CSSLayoutCenterGrid(grid) {
  if(!grid) return ""
  return `${style.blockGrid} ${style["blockWidth" + grid]}`
}


export default class extends Component {
  render() {
    //console.log(this.props)

    let { fixed, center, row, grid } = this.props

    let classNames = [
      CSSLayoutFixedBlock(fixed),
      CSSLayoutCenterBlock(center),
      CSSLayoutCenterRow(row),
      CSSLayoutCenterGrid(grid)
    ]

    return (
      <div className={ classNames.join('') }>
        { this.props.children }
      </div>
    )
  }
}

export class BorderBlock extends Component {
  render() {
    return (
      <div className={ style.borderBlock }>
        { this.props.children }
      </div>
    )
  }
}
