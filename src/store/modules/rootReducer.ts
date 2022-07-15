import { combineReducers } from 'redux'
import bauruReducer from './bauru/reducer'
import refriReducer from './refri/reducer'
import userReducer from './users/reducer'

export default combineReducers({
  bauruReducer,
  refriReducer,
  userReducer,
})
