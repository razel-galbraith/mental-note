import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo" style={{ float: 'left' }}>
          <img
            src="./images/mental-note-02.png"
            alt="mental note."
            style={{ width: '150px' }}
          />
        </Link>
        <span className="navlinks">
          <Link to="#"> ACTIVITY </Link>
          <Link to="#"> REPORT </Link>
          <Link to="/diary"> DIARY </Link>
          <a href="/#add"> ADD ENTRY</a>
          <Link to="/"> HOME </Link>
        </span>
      </nav>
    </div>
  )
}

export default Navigation
