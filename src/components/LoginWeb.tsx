import React from 'react'
import toastr from 'toastr'
import "toastr/build/toastr.min.css";
import { NavLink, useNavigate } from 'react-router-dom'
import { isAuthenticate } from '../utils/localStorage'

type Props = {}

const LoginWeb = (props: Props) => {
  const {user} = isAuthenticate();
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("user")
    toastr.success("Bạn đăng xuất thành công")
    setTimeout(() => {
    navigate("/signin")
    },2000)
  }
  if(!user){
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
  }else{
   return <div className='float-end'>
     Hello {user.name}! 
     <button onClick={handleLogout} className='btn btn-danger ms-3'>Logout</button>
   </div>
    
  }
  
}

export default LoginWeb