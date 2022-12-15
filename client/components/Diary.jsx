import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDiary } from '../actions'
import { Friend } from './Friend'

function Diary() {
  const dispatch = useDispatch()
  const diary = useSelector((state) => state.diary)

  // const [error, setError] = useState('')
  // const [edit, setEdit] = useState('')

  useEffect(() => {
    dispatch(fetchDiary())
  }, [])

  // function handleDelete() {
  //   dispatch(deleteEntry(entry))
  // }

  return (
    <>
      <h2>My Diary</h2>
      <div className="center">
        <div className="entry">
          {diary?.reverse().map((entry) => (
            <div className="entry-request" key={entry.id}>
              <div className="entry-container">
                <div className="flex-children-entry">
                  <h4>DATE: </h4>
                  <Link to={`/diary/${entry.id}`}>{entry.created_on}</Link>
                  <h4>FEELING:</h4>
                  <p style={{ fontSize: '30px' }}>{entry.emoji}</p>
                  <h4>THOUGHTS: </h4>
                  {entry.thoughts}
                  <h4>EVENTS/COMMENTS: </h4>
                  {entry.comments}
                  <p>
                    {/* <button
                      onClick={() => {
                        dispatch(deleteEntry(entry))
                      }}
                    >
                      Delete Entry
                    </button> */}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="spacing"></div>
        <Friend />
        <div className="spacing"></div>
      </div>
    </>
  )
}

export default Diary
