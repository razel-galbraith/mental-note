import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEntry } from '../actions'
import { useNavigate } from 'react-router-dom'
import Welcome from './Welcome'
// import Meme from './Meme'

const Form = () => {
  const [emoji, setEmoji] = useState('')
  const [thoughts, setThoughts] = useState('')
  const [comments, setComments] = useState('')
  const [created_on, setCreated_On] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEntry = {
      created_on,
      emoji,
      thoughts,
      comments,
    }
    dispatch(addEntry(newEntry))
    navigate('/diary')
  }

  // console.log(emoji)

  return (
    <>
      <Welcome />
      <h2 id="add">On my mind today:</h2>
      <div className="custom-emoji-form">
        <p>
          <label htmlFor="date">DATE:</label>
        </p>

        <input
          type="date"
          name="date"
          id="date"
          onChange={(event) => setCreated_On(event.target.value)}
          value={created_on}
          required
        />
        <div>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div
                className="radios-wrapper"
                // onChange={(event) => setEmoji(event.target.value)}
              >
                <p>
                  <label htmlFor="emoji">FEELING:</label>
                </p>
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="happy"
                  autoComplete="off"
                  onChange={(event) => setEmoji(event.target.value)}
                  value="😀"
                  checked={emoji === '😀'}
                />
                <label className="btn" htmlFor="happy">
                  😀
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option2"
                  autoComplete="off"
                  onChange={(event) => setEmoji(event.target.value)}
                  value="🙁"
                  checked={emoji === '🙁'}
                />
                <label className="btn" htmlFor="option2">
                  🙁
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option3"
                  autoComplete="off"
                  onChange={(event) => setEmoji(event.target.value)}
                  value="🤪"
                  checked={emoji === '🤪'}
                />
                <label className="btn" htmlFor="option3">
                  🤪
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option4"
                  autoComplete="off"
                  onChange={(event) => setEmoji(event.target.value)}
                  value="😤"
                  checked={emoji === '😤'}
                />
                <label className="btn" htmlFor="option4">
                  😤
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option5"
                  autoComplete="off"
                  onChange={(event) => setEmoji(event.target.value)}
                  value="😭"
                  checked={emoji === '😭'}
                />
                <label className="btn" htmlFor="option5">
                  😭
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option6"
                  autoComplete="off"
                  onChange={(event) => setEmoji(event.target.value)}
                  value="😫"
                  checked={emoji === '😫'}
                />
                <label className="btn" htmlFor="option6">
                  😫
                </label>
              </div>

              <div>
                <p>
                  <label htmlFor="thoughts">THOUGHTS:</label>
                </p>
                <textarea
                  type="text"
                  name="thoughts"
                  id="thoughts"
                  onChange={(event) => setThoughts(event.target.value)}
                  value={thoughts}
                  placeholder="I'm thinking about..."
                />
              </div>

              <div>
                <p>
                  <label htmlFor="comments">EVENTS/COMMENTS </label>
                </p>
                <textarea
                  type="text"
                  name="comments"
                  id="comments"
                  onChange={(event) => setComments(event.target.value)}
                  value={comments}
                  placeholder="Today..."
                />
              </div>

              <div>
                <div>
                  <p>
                    <button className="rainbow-button">Add Entry</button>
                  </p>
                </div>
                <div className="spacing"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Meme /> */}
    </>
  )
}

export default Form
