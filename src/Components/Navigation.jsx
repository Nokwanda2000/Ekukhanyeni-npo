import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-indigo-500 p-6">       
        <ul>
            <li className="mr-5 hover:text-white">
              <Link to="/" className="text-white">Home</Link>
            </li>
            <li className="mr-5 hover:text-white">
              <Link to="/AboutUspage" className="text-white">About Us</Link>
            </li>
            <li className="mr-5 hover:text-white">
              <Link to="/ContactUspage" className="text-white">Contact Us</Link>
            </li>
            <li className="mr-5 hover:text-white">
              <Link to="/Eventspage" className="text-white">Events</Link>  
              </li> 
              <li className="mr-5 hover:text-white">
                <Link to="/Timetablespage" className="text-white">Timetables</Link>
              </li>
              <li>
                <Link to="/navforcms" className="text-white">Navforcms</Link>
              </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
