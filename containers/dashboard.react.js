// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow


import React, { Component } from 'react'
import { connect } from 'react-redux'
import Block, { BorderBlock, PaddingBlock } from 'icon-pool/containers/block.react.js'
import Title from 'icon-pool/components/title.react.js'
import SearchBar from 'icon-pool/components/searchbar.react.js'
import Icon from 'icon-pool/components/icon.react.js'
import Group from 'icon-pool/components/group.react.js'
import Tag from 'icon-pool/components/tag.react.js'
import selector from 'icon-pool/selectors/dashboard.selector.js'
import fetchIcons from 'icon-pool/actions/fetch-icons.action.js'
import fetchGroups from 'icon-pool/actions/fetch-groups.action.js'
import togggleCheckedIcon from 'icon-pool/actions/toggle-checked-icon.action.js'
import style from 'icon-pool/styles/_dashboard.styl'



class Dashboard extends Component {

  componentDidMount() {
    let { dispatch } = this.props
    dispatch(fetchIcons())
    dispatch(fetchGroups())
  }


  render() {

    let { dispatch, icons, groups } = this.props

    let iconComponent = (n, idx) => (
      <Icon icon={ n }
            key={ idx }
            togggleChecked={ _ => dispatch(togggleCheckedIcon(idx)) } />
    )

    return (
      <div className={ style.main }>
        <Title content="dashboard" />
        <Block row>
          <Block grid="4">
            <BorderBlock>
              <Group groups={ groups } />
            </BorderBlock>

            <BorderBlock>
              <PaddingBlock>
                <Title content="tags" small />
                <Tag />
              </PaddingBlock>
            </BorderBlock>
          </Block>

          <Block grid="8">
            <SearchBar />
            { icons.map(iconComponent) }
          </Block>

        </Block>
      </div>
    )

  }
}


export default connect(selector)(Dashboard)
