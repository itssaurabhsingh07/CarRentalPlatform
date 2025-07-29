import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navabar = () => {
  return (
    <div>
          <Link to='/'>
                  <img src={assets.logo} alt='' className='h-8'/>
          </Link> 
          <div>
            
          </div>
    </div>
  )
}

export default Navabar