import { combineReducers } from 'redux'
import initialList from './initialList'
import initialInput from './initialInput'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  routing: routerReducer,
  initialList,
  initialInput
})