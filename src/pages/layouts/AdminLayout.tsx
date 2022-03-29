import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuAdmin from '../../components/MenuAdmin'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <header>
            <MenuAdmin/>
        </header>
        <aside>
            Menu Trai
        </aside>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminLayout