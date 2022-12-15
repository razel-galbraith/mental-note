import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deleteEntry } from '../actions'

const SelectedEntry = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const diary = useSelector((state) => state.diary)

  const entry = diary.find((entry) => entry.id == id)

  function handleDelete() {
    dispatch(deleteEntry(entry))
  }

  return !entry ? (
    <div></div>
  ) : (
    <>
      <h2>My Diary</h2>
      <div className="center">
        <div className="entry">
          <div className="entry-request" key={entry.id}>
            <div className="entry-container">
              <div className="flex-children-entry">
                <h4>DATE: </h4>
                {entry.created_on}
                <h4>FEELING:</h4>
                <p style={{ fontSize: '30px' }}>{entry.emoji}</p>
                <h4>THOUGHTS: </h4>
                {entry.thoughts}
                <h4>EVENTS/COMMENTS: </h4>
                {entry.comments}
                <p>
                  <button onClick={handleDelete}>Delete Entry</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SelectedEntry
