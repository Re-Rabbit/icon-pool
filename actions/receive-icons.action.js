// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow

import RECEIVE_ICONS from 'icon-pool/types/receive-icons.type.js'

export default res => {
  return {
    type: RECEIVE_ICONS,
    payload: {
      icons: res
    }
  }
}
