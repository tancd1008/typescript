import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo';
import type { ProductType } from './types/product';
import axios from 'axios';
import { list, remove } from './api/product';

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
  const removeItem = async (id: number) => {
    // xoa tren API
    const { data } = await remove(id);
    console.log(data);
    // reRender
    
    const newProducts = products.filter(item => item.id !== id);
    console.log(newProducts);
    setProducts(newProducts);

  }
 
  return (
    <div className="App">
      <table>
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
      </table>
    </div>
  )
}

export default App
