// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow

import React, { Component } from 'react'
import GroupItem from 'icon-pool/components/group-item.react.js'
import style from 'icon-pool/styles/_group.styl'

export default class extends Component {
  render() {
    let { groups } = this.props

    let childView = groups.map((n, idx) => (
      <li key={idx}>
        <GroupItem group={n} />
      </li>
    ))

    return (
      <ul className={ style.groups }>
        { childView }
      </ul>
    )
  }
}
