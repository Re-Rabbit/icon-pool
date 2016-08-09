// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow


import { createSelector } from 'reselect'
import { groupBy, prop } from 'ramda'


export default createSelector(
  state => ({ icons: state.app.dashboard.icons }),
  icons => groupBy(prop('group', icons))
)
