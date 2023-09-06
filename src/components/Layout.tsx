import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./layout.css"
export default function Layout() {
  return (
    <div>
        <nav>
        <ul>
          <li>
            <Link to="/" className='link-text' >Home |</Link>
          </li>
          <li>
            <Link to="/login" className='link-text'>login |</Link>
          </li>
          <li>
            <Link to="/signin" className='link-text'>signin |</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}
