import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import App from './App'
import store from '../store'
import { fetchDiary } from '../actions'

jest.mock('../actions')

fetchDiary.mockImplementation(() => () => {})

test.skip('page header includes entry', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const heading = screen.getByRole('heading')
  expect(heading.innerHTML).toMatch(/diary/)
})

test.skip('renders an <li> for each entry', () => {
  const diary = ['date', 'feeling', 'thoughts', 'comments']
  jest.spyOn(store, 'getState')
  store.getState.mockImplementation(() => ({ diary }))

  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const li = screen.getAllByRole('listitem')
  expect(li).toHaveLength(4)
})

test.skip('dispatches fetchDiary action', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(fetchDiary).toHaveBeenCalled()
})
