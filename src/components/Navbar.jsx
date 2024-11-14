import { Link } from "react-router-dom"
import React from 'react'

function Navbar() {
  return (
    <div className="h-8 bg-green-900">
    <ul className="flex gap-x-24 text-white">
        <li>
            <Link to="/">AllMovies</Link>
        </li>
        <li>
            <Link to="Detail">MoviesDetail</Link>
        </li>
        <li>
            <Link to="Contact">Contact</Link>
        </li>
    </ul>
  </div>
  )
}

export default Navbar

   