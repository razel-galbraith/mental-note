import diaryReducer from './diary'
import { deleteEntry } from '../actions'

describe('diary  reducer', () => {
  test.skip('delete diary entry', () => {
    const state = 'entry1'
    const action = deleteEntry('entry1')
    const newState = diaryReducer(state, action)
    expect(newState).not.toContain('entry1')
    // expect(newState).toContain('entry1')
  })
  test('has initial state', () => {
    const state = diaryReducer(undefined, { type: '@@TEST' })
    expect(state).toHaveLength(0)
  })
})
