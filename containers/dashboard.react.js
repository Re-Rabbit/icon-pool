// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow


import React, { Component } from 'react'
import { connect } from 'react-redux'
import Block, { BorderBlock } from 'icon-pool/containers/block.react.js'
import Title from 'icon-pool/components/title.react.js'
import SearchBar from 'icon-pool/components/searchbar.react.js'
import Icon from 'icon-pool/components/icon.react.js'
import Group from 'icon-pool/components/group.react.js'
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
      <div className={ style.main }>
        <Title content="dashboard"></Title>
        <Block row>
          <Block grid="4">
            <BorderBlock>
              <Group />
            </BorderBlock>

            <BorderBlock>
              <ul>
                <li>ALL</li>
                <li>LOGO</li>
                <li>ACTION</li>
                <li>VIDEO</li>
              </ul>
            </BorderBlock>
          </Block>

          <Block grid="8">
            <SearchBar />
            { this.props.icons.map(iconComponent) }
          </Block>

        </Block>
      </div>
    )

  }
}


export default connect(selector)(Dashboard)
