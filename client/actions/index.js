import {
  getDiary,
  getSelectedEntry,
  addNewEntry,
  deleteSelectedEntry,
  getFriend,
} from '../apis/diary'

export const SET_DIARY = 'SET_DIARY'
export const SET_ERROR = 'SET_ERROR'
export const GET_ENTRY = 'GET_ENTRY'
export const ADD_ENTRY = 'ADD_ENTRY'
export const DEL_ENTRY = 'DEL_ENTRY'
export const UPDATE_ENTRY = 'UPDATE_ENTRY'
export const SET_FRIEND = 'SET_FRIEND'

// simple action
export function setDiary(diary) {
  return { type: 'SET_DIARY', payload: diary }
}

export function setError(error) {
  return { type: 'SET_ERROR', payload: error }
}

export function setFriend(friend) {
  return {
    type: SET_FRIEND,
    payload: friend,
  }
}

export function getEntry(entry) {
  return { type: 'GET_ENTRY', payload: entry }
}

export function viewSelectedEntry(entry) {
  return (dispatch) => {
    return getSelectedEntry(entry)
      .then(() => {
        dispatch(getEntry(entry))
      })
      .catch((err) => console.error(err.message))
  }
}

// thunk
export function fetchDiary() {
  return (dispatch) => {
    return getDiary()
      .then((diary) => {
        console.log('action', diary)
        dispatch(setDiary(diary))
      })
      .catch((e) => {
        dispatch(setError(e.message))
      })
  }
}

export function addEntry(newEntry) {
  return (dispatch) => {
    return addNewEntry(newEntry)
      .then((res) => {
        dispatch(setDiary(res))
      })
      .catch((err) => console.error(err.message))
  }
}

// simple action
export function removeEntry(deletedEntry) {
  return {
    type: 'DEL_ENTRY',
    payload: deletedEntry,
  }
}

export function deleteEntry(deletedEntry) {
  return (dispatch) => {
    return deleteSelectedEntry(deletedEntry)
      .then(() => {
        dispatch(removeEntry(deletedEntry))
      })
      .catch((err) => console.error(err.message))
  }
}

export function updateEntry(updateEntry) {
  return {
    type: 'UPDATE_ENTRY',
    payload: updateEntry,
  }
}

export function fetchFriend() {
  return (dispatch) => {
    return getFriend().then((friend) => {
      dispatch(setFriend(friend))
    })
  }
}
