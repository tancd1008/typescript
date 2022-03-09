import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import Item from './Item'

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([
    {id: 1, name: "Product A"}, //item
    {id: 2, name: "Product B"}, //item
    {id: 3, name: "Product C"} //item
  ])
  const removeItem = (id) => {
    const newProducts = products.filter(item => item.id !== id);
    setProducts(newProducts);
  }
  return (
    <div className="App">
      Count: {count} <button onClick={() => { setCount(count + 1)}}>Click</button>
      {products.map((item,index) => <div>{item.name} 
          <button onClick={() => removeItem(item.id)}>Remove</button></div>
        )}
        
      <ShowInfo name="Tan" />
    </div>
  )
}

export default App
