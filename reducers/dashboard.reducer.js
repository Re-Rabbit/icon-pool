// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow

import { List } from 'immutable'
import REQUEST_ICONS from 'icon-pool/types/request-icons.type.js'
import RECEIVE_ICONS from 'icon-pool/types/receive-icons.type.js'
import REQUEST_GROUPS from 'icon-pool/types/request-groups.type.js'
import RECEIVE_GROUPS from 'icon-pool/types/receive-groups.type.js'
import TOGGLECHECKED_ICON from 'icon-pool/types/toggle-checked-icon.type.js'

const initState = {
  icons: List(),
  groups: List()
}

export default (state = initState, action) => {
  switch(action.type) {
  case REQUEST_ICONS:
    return state
  case RECEIVE_ICONS:
    return Object.assign({}, state, {
      icons: action.payload.icons.map(n => {
        return n.set('isChecked', false)
      })
    })

  case TOGGLECHECKED_ICON:
    let { icons } = state
    let idx = action.payload.idx
    let target = icons.get(idx)

    return Object.assign({}, state, {
      icons: icons.set(idx, target.set('isChecked', !target.get('isChecked')))
    })

  case REQUEST_GROUPS:
    return state
  case RECEIVE_GROUPS:
    return Object.assign({}, state, ({
      groups: action.payload.groups
    }))

  default:
    return state
  }
}
