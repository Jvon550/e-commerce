import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./layout.css"
export default function Layout() {
  return (
    <React.Fragment>
        <nav>
        <ul>
          <li>
            <Link to="/login" className='link-text'>login |</Link>
          </li>
          <li>
            <Link to="/signin" className='link-text'>signin |</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </React.Fragment>
  )
}
