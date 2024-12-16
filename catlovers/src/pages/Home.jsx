import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

const Home = () => {
  return (
    <div className='title-container'>
        <h1 className='title'>CatLovers</h1>
        <Link to='/login' className='link'>Login</Link>
    </div>
  )
}

export default Home