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