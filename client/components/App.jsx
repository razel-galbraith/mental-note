import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'

// import { addEntry } from '../actions'
import Navigation from './Navigation'
// import Welcome from './Welcome'
import AddEntry from './AddEntry'
import Diary from './Diary'
// import Header from './Header'
import Footer from './Footer'
import SelectedEntry from './SelectedEntry'

function App() {
  // const diaryEntry = useSelector((state) => state.diary)
  // use redux to call this state within component
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(addEntry())
  // }, [])

  // When the user scrolls the page, execute myFunction

  return (
    <>
      <div className="app">
        <Navigation />
        <Routes>
          {/* <Route path="/home" element={<Welcome />}></Route> */}
          <Route path="/" element={<AddEntry />}></Route>
          <Route path="/diary" element={<Diary />}></Route>
          <Route path="/diary/:id" element={<SelectedEntry />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App

// {diary.map((entry) => (
//   <li key={entry}>{entry}</li>
// ))}
