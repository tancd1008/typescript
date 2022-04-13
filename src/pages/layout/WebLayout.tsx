import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import HeaderWeb from '../../components/HeaderWeb'
import { CateType } from '../../types/categories'

type CateProps = {
  cate: CateType[]
}

const WebLayout = (props: CateProps) => {
  console.log(props.cate)
  return (
    <div className='container-fluid'>
        <header>
            <HeaderWeb/>
        </header>
        
        <main className='min-vh-100'>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default WebLayout