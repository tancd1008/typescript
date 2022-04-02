import logo from './logo.svg'
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from 'react-router-dom'
import WebLayout from './pages/layout/WebLayout'
import AdminLayout from './pages/layout/AdminLayout'


function App() {
  

 
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<WebLayout/>}>
            
          </Route>
          <Route path="admin" element={<AdminLayout />}> 
          </Route>
          
        </Routes>
      </main>
     
    </div>
  )
}

export default App
