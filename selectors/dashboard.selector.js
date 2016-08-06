// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow


import { createSelector } from 'reselect'

export default createSelector(
  state => ({ icons: state.app.icons }),
  icons => icons
)
