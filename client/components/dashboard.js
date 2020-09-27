import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'

const Dummy = () => {
  const { userId } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          This is dummy component { userId }
          <Link to="/"> Go to root </Link>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy