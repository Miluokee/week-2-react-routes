import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title"> Main </div>
          <Link to="/dashboard/profile/239c8d29-7ad6-4d56-a4e5-1dcc9abd969e"> Go To Profile </Link>
          <Link to="/dashboard"> Go To Root </Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
