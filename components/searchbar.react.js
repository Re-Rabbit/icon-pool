// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow


import React, { Component } from 'react'
import style from 'icon-pool/styles/_search-bar.styl'

export default class extends Component {
  render() {
    return (
      <div>
        <input className={ style.searchBarField }
               type="text"
               placeholder="enter icon name, code, group or tag name, eg: g:logo k:lang" />
      </div>
    )
  }
}
