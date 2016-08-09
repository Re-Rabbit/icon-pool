// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow

import React, { Component } from 'react'
import TagItem from 'icon-pool/components/tag-item.react.js'
import style from 'icon-pool/styles/_tag.styl'

export default class extends Component {
  render() {

    return (
      <ul className={ style.tags }>
        <li key={1}>
          <TagItem tag={{ name: 'elm', count: '1044' }} />
        </li>
      </ul>
    )
  }
}
