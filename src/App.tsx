import logo from './logo.svg'
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from 'react-router-dom'
import WebLayout from './pages/layout/WebLayout'
import AdminLayout from './pages/layout/AdminLayout'
import Product from './pages/Product'
import { useEffect, useState } from 'react'
import { ProductType } from './types/product'
import { list } from './api/product'
import DetailProduct from './pages/DetailProduct'


function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect( () => {
    const getProducts = async () => {
      const {data} = await list()
      setProducts(data)
      // console.log(data)
    }
    getProducts();
  },[])

 
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<WebLayout/>}>
            <Route index element={<Product products={products}/>}/>
            <Route path='products/:id' element={<DetailProduct/>} />
          </Route>
          <Route path="admin" element={<AdminLayout />}> 
          </Route>
          
        </Routes>
      </main>
     
    </div>
  )
}

export default App
