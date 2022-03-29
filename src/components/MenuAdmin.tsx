import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const MenuAdmin = (props: Props) => {
  return (
    <div>
        <div className='float-start bg-dark menu-left  '>
            <h1 className='text-white'>CAo</h1>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 '>
                <li className='nav-item'>
                    
                    <NavLink className="nav-link text-white" aria-current="page" to="/admin/dashboard">Dashboard</NavLink>
                </li>
                <li>
                <NavLink className="nav-link text-white" aria-current="page" to="/admin/dashboard">Dashboard</NavLink>
                </li>
                <li>
                <NavLink className="nav-link text-white" aria-current="page" to="/admin/dashboard">Dashboard</NavLink>
                </li>
                <li>
                <NavLink className="nav-link text-white" aria-current="page" to="/admin/dashboard">Dashboard</NavLink>
                </li>
            </ul>
        </div>
        <div className='bg-dark'>
            <h2 className='text-white'>Tan</h2>
        </div>
    </div>
  )
}

export default MenuAdmin