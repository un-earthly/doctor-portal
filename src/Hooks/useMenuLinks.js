import React from 'react'
import { signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'
import auth from '../firebase.init'
export default function useMenuLinks(user) {
    const menuLinks = <>
        <li><Link className='font-semibold' to='/'>Home</Link></li>
        <li><Link className='font-semibold' to='/about'>About</Link></li>
        <li><Link className='font-semibold' to='/appointment'>Appointment</Link></li>
        <li><Link className='font-semibold' to='/reviews'>Reviews</Link></li>
        <li><Link className='font-semibold' to='/contact'>Contact</Link></li>
        {user && <li>

            <Link Link className='font-semibold' to='/dashboard'>Dashboard</Link>
        </li>
        }
        <li>{user ?
            <button onClick={() => signOut(auth)} className='btn btn-ghost'>signout</button>
            :
            <Link className='font-semibold' to='/login'>Login</Link>

        }</li>
    </>
    return menuLinks;
}
