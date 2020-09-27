import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './header'

const Home = () => {
  const { username } = useParams()
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10" id="title">
          Dashboard
          <Link to="/dashboard/profile/239c8d29-7ad6-4d56-a4e5-1dcc9abd969e"> Go To Profile </Link>
          <Link to="/dashboard/main"> Go To Main </Link>
        </div>     
      
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10" id="title">
          Main
          <Link to="/dashboard/profile/239c8d29-7ad6-4d56-a4e5-1dcc9abd969e"> Go To Profile </Link>
          <Link to="/dashboard"> Go To Root </Link>
        </div>
      
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10" id="title">
          Profile
          <Link to="/dashboard"> Go To Root </Link>
          <Link to="/dashboard/main"> Go To Main </Link>
        </div>
        
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10" id="username">
          { username }
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
