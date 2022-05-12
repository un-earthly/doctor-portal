import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../firebase.init'

export default function Navbar() {
    const [user] = useAuthState(auth)
    const menuLinks = <><li><Link className='font-semibold' to='/'>Home</Link></li>
        <li><Link className='font-semibold' to='/about'>About</Link></li>
        <li><Link className='font-semibold' to='/appointment'>Appointment</Link></li>
        <li><Link className='font-semibold' to='/reviews'>Reviews</Link></li>
        <li><Link className='font-semibold' to='/contact'>Contact</Link></li>
        <li>{user ? <button onClick={() => signOut(auth)} className='btn btn-ghost'>signout</button> : <Link className='font-semibold' to='/login'>Login</Link>}</li></>

    return (
        <div className="navbar sticky top-0 z-50 backdrop-blur-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuLinks}
                </ul>
            </div>
        </div>
    )
}
