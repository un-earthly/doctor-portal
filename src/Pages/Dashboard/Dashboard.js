import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard/my-appointments'>My Appointments</Link></li>
                        <li><Link to='/dashboard/my-history'>My History</Link></li>
                        <li><Link to='/dashboard/my-review'>My review</Link></li>
                        <li><Link to='/dashboard/all-user'>All User</Link></li>
                    </ul>

                </div>
            </div >
        </div>
    )
}
