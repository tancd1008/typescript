import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const MenuAdmin = (props: Props) => {
  return (
    <div>
        <div className=' bg-dark menu-left  '>
            <h1 className='text-white'>Logo</h1>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 '>
                <li className='nav-item'>
                    <NavLink className="nav-link text-white" aria-current="page" to="/admin/dashboard">Dashboard</NavLink>
                </li>
                <li>
                <NavLink className="nav-link text-white" aria-current="page" to="/admin/product">Product</NavLink>
                </li>
                <li>
                <NavLink className="nav-link text-white" aria-current="page" to="/admin/product/add">Add Product</NavLink>
                </li>
                <li>
                <NavLink className="nav-link text-white" aria-current="page" to="/admin/categories">Categories</NavLink>
                </li>
                <li>
                <NavLink className="nav-link text-white" aria-current="page" to="/admin/categories/add">Add category</NavLink>
                </li>
                <li>
                <NavLink className="nav-link text-white" aria-current="page" to="/admin/dashboard">Sign Out</NavLink>
                </li>
            </ul>
            
        </div>
        
    </div>
  )
}

export default MenuAdmin