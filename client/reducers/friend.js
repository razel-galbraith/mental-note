import { SET_FRIEND } from '../actions'

const initialState = []

const friendReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_FRIEND:
      return payload
    default:
      return state
  }
}

export default friendReducer
