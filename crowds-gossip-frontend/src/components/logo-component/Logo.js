import React from 'react'
import './Logo.css'
import logo from './Logo.png'

function Logo() {
  return (
      <img className='image' src={logo}
        alt='No image found' />
  )
}

export default Logo