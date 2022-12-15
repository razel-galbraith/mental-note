const initialState = null

const errorReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_ERROR':
      return payload
    default:
      return state
  }
}

export default errorReducer
