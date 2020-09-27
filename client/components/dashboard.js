import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">  
            Dashboard 
          </div>
        </div>
        <Link to="/dashboard/profile/239c8d29-7ad6-4d56-a4e5-1dcc9abd969e"> Go To Profile </Link>
        <Link to="/dashboard/main"> Go To Main </Link>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
