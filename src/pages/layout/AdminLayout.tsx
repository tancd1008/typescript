import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../components/HeaderAdmin'
import MenuAdmin from '../../components/MenuAdmin'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div><div >
    <header >
      <HeaderAdmin/>
    </header>
    <div className='flex'>
    <aside >
      <MenuAdmin/>
    </aside>
    <main className='w-100' >
      <Outlet/>
    </main>
    </div> 
</div></div>
  )
}

export default AdminLayout