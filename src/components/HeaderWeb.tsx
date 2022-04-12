import React from 'react'
import { NavLink } from 'react-router-dom'
import Banner from './Banner'
import LoginWeb from './LoginWeb'
import MenuWeb from './MenuWeb'
import Search from './Search'

type Props = {}

const HeaderWeb = (props: Props) => {
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                Logo
                </NavLink>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <MenuWeb />
                <Search />
                
                <div className='float-end col-6'>
                  <LoginWeb/>
                </div>
                </div>
            </div>
        </nav>
        <div>
            <Banner/>
        </div>
    </div>
  )
}

export default HeaderWeb