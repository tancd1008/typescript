import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderWeb from '../../components/HeaderWeb'

type Props = {}

const WebsiteLayout = (props: Props) => {
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

export default WebsiteLayout