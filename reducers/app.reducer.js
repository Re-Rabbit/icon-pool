import { combineReducers } from 'redux'

import dashboardReducer from 'icon-pool/reducers/dashboard.reducer.js'

export default combineReducers({
  dashboard: dashboardReducer
})
