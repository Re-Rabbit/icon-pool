// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow

import React, { Component } from 'react'
import GroupItem from 'icon-pool/components/group-item.react.js'
import style from 'icon-pool/styles/group.styl'


export default class extends Component {
  render() {
    return (
      <ul className={ style.icons }>
        <li>
          <GroupItem />
        </li>
        <li>
          <GroupItem />
        </li>
        <li>
          <GroupItem last />
        </li>
      </ul>
    )
  }
}
