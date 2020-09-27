import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'

const Dummy = () => {
  const { username } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div id="title">
          Profile
          <Link to="/dashboard"> Go To Root </Link>
          <Link to="/dashboard/main"> Go To Main </Link>
        </div>
        <div id="username">
          { username }
          <Link to="/dashboard"> Go To Root </Link>
          <Link to="/dashboard/main"> Go To Main </Link>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy