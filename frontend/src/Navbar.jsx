import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex h-12 text-2xl items-center justify-around bg-blue-100'>
        <h1 className='font-semibold text-purple-800'> <Link to={"/"}>MERN</Link> </h1>
        <ul className='flex justify-center gap-8 text-lg text-gray-800 font-medium'>
            <li><Link to={"/"} href="#">Create user</Link></li>
            <li><Link to={"/all"} href="#">See users</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
