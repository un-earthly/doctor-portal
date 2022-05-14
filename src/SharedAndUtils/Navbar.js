import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../firebase.init'
import useMenuLinks from '../Hooks/useMenuLinks'

export default function Navbar() {

    const [user] = useAuthState(auth)
    const menuLinks = useMenuLinks(user)
    return (
        <div className="navbar sticky top-0 z-50 backdrop-blur-md">

            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuLinks}
                </ul>
            </div>






            <div className="flex items-center w-full justify-between">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
                <label tabIndex="0" for="sidebar" className="btn btn-ghost drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuLinks}
                </ul>
            </div>
        </div>
    )
}
