import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuAdmin from '../../components/MenuAdmin'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        
        <main>
        <aside className='float-start'>
            <MenuAdmin/>
        </aside>
        <div >

            <Outlet/>
        </div>
        </main>
    </div>
  )
}

export default AdminLayout