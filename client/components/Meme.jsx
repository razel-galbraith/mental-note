import React, { useEffect, useState } from 'react'
import { getMeme } from '../apis/apiClient'
// import request from 'superagent'

function Meme() {
  const [meme, setMeme] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  function getNewMeme() {
    getMeme()
      .then((meme) => {
        setMeme(meme)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err.message)
        setError('Something went wrong!')
        setLoading(false)
      })
  }

  console.log(meme)

  useEffect(() => {
    getNewMeme()
  }, [])

  if (loading) return <div>Loading Meme</div>
  if (error) return <div>Error Loading Meme</div>
  console.log(meme.memes)

  return (
    <>
      <div>
        <div className="spacing"></div>
        <h4>{meme.title}</h4>
        <img src={meme.url} alt={`meme generator`} width="50%" />
      </div>
      <div className="spacing"></div>
    </>
  )
}

export default Meme
