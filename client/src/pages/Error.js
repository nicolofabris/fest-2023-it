import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'

const Error = () => {
  return (
    <div className="full-page">
        <div>
            <img src={img} alt='not found'/>
            <h3>Ohh, page not found!</h3>
            <p>We can't find the page you're looking for</p>
            <Link to='/'>Back Home</Link>
        </div>
    </div>
  )
}

export default Error