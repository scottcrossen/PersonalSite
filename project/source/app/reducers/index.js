// @flow

import {combineReducers} from 'redux'
import HttpReducer from 'app/reducers/HttpReducer'

export default combineReducers({
  http: HttpReducer,
})
