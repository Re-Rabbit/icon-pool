// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow


import { fromJS } from 'immutable'
import { compose } from 'redux'
import requestGroups from 'icon-pool/actions/request-groups.action.js'
import receiveGroups from 'icon-pool/actions/receive-groups.action.js'

export default  _ => dispatch => {
  dispatch(requestGroups())

  return fetch('/api/icons/groups')
    .then(res => res.json())
    .then(fromJS)
    .then(compose(dispatch, receiveGroups))
}
