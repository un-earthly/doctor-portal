import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='h-screen flex items-center justify-center flex-col'>
      <img src="https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal/main/assets/images/dribbble_1.gif" className='hidden lg:block' alt="" />
      <h1 className="text-5xl font-semibold text-red-500 p-3 text-center">404!</h1>
      <p className="text-xl">Please head back to <Link to='/' className='btn-link'>Home</Link></p>

    </div>
  )
}
