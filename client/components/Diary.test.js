import React from 'react'
import { render, screen } from '@testing-library/react'
import Diary from './Diary'

import { useSelector, useDispatch } from 'react-redux'

jest.mock('react-redux')

useSelector.mockReturnValue([
  {
    comments: 'Started new job today.',
    created_on: '2022-10-12',
    emoji: '😩',
    thoughts: "Today was so rough. I'm having a hard time.",
  },
  {
    comments: 'Great day',
    created_on: '2022-10-12',
    emoji: '😊',
    thoughts: 'On top of the world.',
  },
])

const fakeDispatch = jest.fn()
useDispatch.mockReturnValue(fakeDispatch)

describe('<Diary />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('all entries have a delete button', () => {
    render(<Diary />)
    const button = screen.getAllByRole('button')
    expect(button).toHaveLength(2)
    screen.debug
  })
  test.skip('displays all diary entries', () => {
    render(<Diary />)
    const date = screen.getByText(/diary/)
    expect(date).toBe(/diary/)
  })
})
