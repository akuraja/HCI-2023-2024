import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="bg-slate-800">
            <div className="">
                <img src="/path-to-your-logo.png" alt="Logo" className="logo" />
            </div>
            <ul className="navList">
                <li className="navItem">
                    <Link href="/">Home</Link>
                </li>
                <li className="navItem">
                    <Link href="/pages/about">About Us</Link>
                </li>
                <li className="navItem">
                    <Link href="/pages/Services2">Services</Link>
                </li>
                <li className="navItem">
                    <Link href="/pages/BusScheduling">Bus Scheduling and Routes</Link>
                </li>
                <li className="navItem">
                    <Link href="/pages/Information">Information and Guidance</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header