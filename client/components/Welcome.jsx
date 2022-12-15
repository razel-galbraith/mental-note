import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { getDiary } from '../apis/apiClient'

const Welcome = () => {
  const [diary, setDiary] = useState(null)
  useEffect(() => {
    getDiary()
      .then((diary) => {
        setDiary(diary)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(diary)

  return (
    <>
      <a href="/#add">
        <img
          className="home"
          src="./images/face_circles_logo.png"
          alt="mental note"
        />
      </a>
      <p></p>
    </>
  )
}

export default Welcome
