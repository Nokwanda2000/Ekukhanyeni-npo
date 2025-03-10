import React from 'react'
import { Link } from 'react-router-dom'

const Navforcms = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
        <ul className="flex gap-6">
          <li className="hover:text-white">
            <Link to="/SignUpcms" className="text-white">Sign Up</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/Userpagecms" className="text-white">User Page</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/Eventspagecms" className="text-white">Events Page</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/Timetablescms" className="text-white">Timetables</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navforcms
