import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'

const Profile = () => {
  const { username } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title"> Profile</div>
          <Link to="/dashboard"> Go To Root </Link>
          <Link to="/dashboard/main"> Go To Main </Link>
          <div id="username"> { username } </div>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
