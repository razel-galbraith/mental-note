import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFriend } from '../actions'

export function Friend() {
  const friend = useSelector((state) => state.friend)
  //new var, useSelector gets state from redux state in reducers) orange state is whoooole redux state, all of the reducers. But we don't want all, we want proverb. => ft arrow accesses specifics

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFriend())
  }, [])

  console.log(friend.quote)
  return (
    <>
      <h3>QUOTE OF THE DAY:</h3>
      <p>
        {friend.quote}
        <i> {friend.author}.</i>
      </p>
    </>
  )
}

export default Friend
