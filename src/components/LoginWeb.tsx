import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const LoginWeb = (props: Props) => {
  return (
    <div className='float-end'>
      <NavLink to={'signup'}>
      <button className="btn btn-outline-info" type="submit">Sign Up</button>
      </NavLink>
      <NavLink to={'signin'}>

      <button className="btn btn-outline-success" type="submit">Sign In</button>
      </NavLink>
    </div>
  )
}

export default LoginWeb