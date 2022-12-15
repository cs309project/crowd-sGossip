import React from 'react'
import './Logo.css'
import logo from './Logo.png'

function Logo() {
  return (
    <div className='logo'>
      <img className='image' src={logo}
        alt='No image found' />
    </div>
  )
}

export default Logo