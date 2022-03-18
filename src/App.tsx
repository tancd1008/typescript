import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo';
import type { ProductType } from './types/product';
import axios from 'axios';
import { list, remove } from './api/product';
import { Navigate, NavLink, Route,  Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/ManagerProduct';
import Product from './pages/Product';

import "bootstrap/dist/css/bootstrap.min.css";

// type TProduct = {
//   id : number;
//   name: string
// }
function App() {
  // const [count, setCount] = useState<number>(0);
  // const [products, setProducts] = useState<TProduct[]>([{id: 1, name: "Tan"}])
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const {data} = await list();
      console.log(data);
      setProducts(data);
    }
    getProducts();
  },[])
 
 
  return (
    <div className="App">
      {/* <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return <tr>
              <th>{index +1}</th>
              <th>{item.name}</th>
              <th>
                <button onClick={() => removeItem(item.id) }>Remove</button>
              </th>
            </tr>
          })}
        </tbody>
      </table> */}
      <header>
        <ul>
          <li><NavLink to='/'>Home page</NavLink></li>
          <li><NavLink to='/product'>Product page</NavLink></li>
          <li><NavLink to='/admin/dashboard'>Admin</NavLink></li>
          <li></li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<WebsiteLayout/>}>
            <Route index element={<Home/>} />
            <Route path='product' element={<Product/>} />
          </Route>
          <Route path='admin' element={<AdminLayout/>}>
          <Route index element={<Navigate to="dashboard"/>} />
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='product' element={<ManagerProduct/>} />

          </Route>
          
        </Routes>
      </main>
    </div>
  )
}

export default App
