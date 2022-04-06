import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import HeaderWeb from '../../components/HeaderWeb'
import { CateType } from '../../types/categories'

type CateProps = {
  cate: CateType[]
}

const WebLayout = (props: CateProps) => {
  console.log(props.cate)
  return (
    <div>
        <header>
            <HeaderWeb/>
        </header>
        <div className='row m-3'>
          {props.cate?.map((item,index) => {
            return <div className='col' key={index}>
              
              <NavLink className='btn btn-secondary' to={`category/${item._id}`} >{item.name}</NavLink>
            </div>
          })}
        </div>
        <main>
            <Outlet/>
        </main>
        <footer>
            Footer
        </footer>
    </div>
  )
}

export default WebLayout