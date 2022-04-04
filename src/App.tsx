import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import WebLayout from "./pages/layout/WebLayout";
import AdminLayout from "./pages/layout/AdminLayout";
import Product from "./pages/Product";
import { useEffect, useState } from "react";
import { ProductType } from "./types/product";
import { add, list, remove, update } from "./api/product";
import DetailProduct from "./pages/DetailProduct";
import Dashboars from "./pages/Dashboard";
import Dashboard from "./pages/Dashboard";
import ManagerProduct from "./pages/ManagerProduct";
import ProductAdd from "./pages/ProductAdd";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ProductEdit from "./pages/ProductEdit";

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
      // console.log(data)
    };
    getProducts();
  }, []);
  const onHandleRemove = async (id: number) => {
    await remove(id);
    setProducts(products.filter((item) => item._id !== id));
  };
  const onHandleAdd = async (product: ProductType) => {
    console.log(product)
    const { data } = await add(product);
    console.log(data);
    
    setProducts([...products, data]);
  }
  const onHandleUpdate = async (product:ProductType) => {
    const {data} = await update(product)
    console.log(data);
    setProducts(products.map(item => item._id == data._id ? data : item))
}

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<WebLayout />}>
            <Route index element={<Product products={products} />} />
            <Route path="products/:id" element={<DetailProduct />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />

          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product">
              <Route index element={<ManagerProduct data={products} onRemove={onHandleRemove} />}/>
              <Route path="add" element={<ProductAdd onAdd={onHandleAdd}  />} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>} />
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
