import React from 'react'
import './Logo.css'

function Logo() {
  return (
    <div className='logo'>
      <img className='image' src={require('./Logo.png')}
        alt='No image found' />
    </div>
  )
}

export default Logo