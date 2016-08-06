// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow


import React, { Component } from 'react'
import { connect } from 'react-redux'
import Block from 'icon-pool/containers/block.react.js'
import SearchBar from 'icon-pool/components/searchbar.react.js'
import Icon from 'icon-pool/components/icon.react.js'
import selector from 'icon-pool/selectors/dashboard.selector.js'
import fetchIcons from 'icon-pool/actions/fetch-icons.action.js'
import togggleCheckedIcon from 'icon-pool/actions/toggle-checked-icon.action.js'
import style from 'icon-pool/styles/dashboard.styl'



class Dashboard extends Component {

  componentDidMount() {
    let { dispatch } = this.props
    dispatch(fetchIcons())
  }


  render() {
    let { dispatch } = this.props

    let iconComponent = (n, idx) => (
      <Icon icon={n}
            key={idx}
            togggleChecked={ _ => dispatch(togggleCheckedIcon(idx)) } />
    )

    return (
      <div>
        <Block center={ style.main }>
          <SearchBar />
          { this.props.icons.map(iconComponent) }
        </Block>
      </div>
    )
  }
}


export default connect(selector)(Dashboard)
