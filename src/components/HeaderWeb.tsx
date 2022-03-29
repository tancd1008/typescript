import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuWebsite from './MenuWebsite'
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
                <MenuWebsite />
                <Search />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default HeaderWeb