const initialDiaryState = []

const diaryReducer = (state = initialDiaryState, action) => {
  const { type, payload } = action
  console.log('reducer', payload)
  switch (type) {
    case 'SET_DIARY':
      return payload
    case 'GET_ENTRY':
      return payload
    case 'ADD_ENTRY':
      return [...state, payload]
    case 'DEL_ENTRY':
      return state.filter((entry) => entry !== payload)
    case 'UPDATE_ENTRY': {
      const newState = [...state]
      newState.splice(state.indexOf(payload.target), 1, payload.update)
      return newState
    }
    default:
      return state
  }
}

export default diaryReducer
