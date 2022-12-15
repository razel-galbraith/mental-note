import { combineReducers } from 'redux'
import diaryReducer from './diary'
import error from './error'
import friendReducer from './friend'

export default combineReducers({
  diary: diaryReducer,
  error,
  friend: friendReducer,
})
