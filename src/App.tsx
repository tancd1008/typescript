import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo';
import type { ProductType } from './types/product';
import axios from 'axios';
import { add, list, remove, update } from './api/product';
import { Navigate, NavLink, Route,  Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Home from './pages/Home';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/ManagerProduct';
import Product from './pages/Product';

import "bootstrap/dist/css/bootstrap.min.css";
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
import Signup from './pages/signup';
import { UserType } from './types/user';
import Signin from './pages/Signin';

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
      setProducts(data);
    }
    getProducts();
  },[])

 const onHandleRemove = async (id: number) => {
  // xoa tren API
  await remove(id);
  // reRender
  setProducts(products.filter(item => item.id !== id));
}

const onHandleAdd = async (product: ProductType) => {
  // call api
  const { data} = await add(product);
  setProducts([...products, data])
}
const onHandleUpdate = async (product:ProductType) => {
    const {data} = await update(product)
    console.log(data);
    setProducts(products.map(item => item.id == data.id ? data : item))
}

 
  return (
    <div className="App">
      
      <header>
        <ul>
          <li><NavLink to='/'>Home page</NavLink></li>
          <li><NavLink to='/product'>Product </NavLink></li>
          <li><NavLink to='/admin/dashboard'>Admin</NavLink></li>
          <li></li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<WebsiteLayout/>}>
            <Route index element={<Home/>} />
            <Route path='product' element={<Product/>} />
            <Route path='signup' element={<Signup />} />
            <Route path='signin' element={<Signin />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}> 
        <Route index element={<Navigate to="dashboard"/>} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product">
          <Route index element={<ManagerProduct data={products} onRemove={onHandleRemove}/>} />
          <Route path="add" element={<ProductAdd onAdd={onHandleAdd}/>} />
          <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>} />
        </Route>
      </Route>
          
        </Routes>
      </main>
    </div>
  )
}

export default App
