// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow

import RECEIVE_GROUPS from 'icon-pool/types/receive-groups.type.js'

export default res => {
  return {
    type: RECEIVE_GROUPS,
    payload: {
      groups: res
    }
  }
}
