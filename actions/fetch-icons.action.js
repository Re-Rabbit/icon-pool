// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow


import { fromJS } from 'immutable'
import { compose } from 'redux'
import requestIcons from 'icon-pool/actions/request-icons.action.js'
import receiveIcons from 'icon-pool/actions/receive-icons.action.js'

export default  _ => dispatch => {
  dispatch(requestIcons())

  return fetch('/api/icons')
    .then(res => res.json())
    .then(fromJS)
    .then(compose(dispatch, receiveIcons))
}
