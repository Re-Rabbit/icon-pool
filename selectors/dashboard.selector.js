// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow


import { createSelector } from 'reselect'
import { prop, compose } from 'ramda'

/*
export default createSelector(
  state => ({ icons: state.app.dashboard.icons }),
  state => ({ groups: state.app.dashboard.groups }),
  (icons, groups) => ({
    icons: icons,
    groups: groups
  })
)
*/

const dashboardProp = compose(prop('dashboard'), prop('app'))
const iconsProp = compose(prop('icons'), dashboardProp)
const groupsProp = compose(prop('groups'), dashboardProp)

export default state => {
  return {
    icons: iconsProp(state),
    groups: groupsProp(state)
  }
}
