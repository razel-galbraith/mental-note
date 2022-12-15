// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { getDiary } from '../apiClient'

// const Home = () => {
//   const [diary, setDiary] = useState(null)
//   useEffect(() => {
//     getDiary()
//       .then((diary) => {
//         setDiary(diary)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }, [])
//   console.log(diary)

//   return (
//     <>
//       <a href="/">
//         <img className="logo" src="#" width="250px" alt="Mental Note" />
//       </a>
//       <h2>Mental Note</h2>
//       <p>What is on your mind today?</p>
//     </>
//   )
// }

// export default Home
