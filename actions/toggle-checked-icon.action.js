// -*- coding: utf-8 -*-
// -*- mode: react -*-
// @flow


import TOGGLECHECKED_ICON from 'icon-pool/types/toggle-checked-icon.type.js'

export default idx => {
  return {
    type: TOGGLECHECKED_ICON,
    payload: {
      idx: idx
    }
  }
}
