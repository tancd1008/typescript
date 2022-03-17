import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <header>
            Header Admin 1
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