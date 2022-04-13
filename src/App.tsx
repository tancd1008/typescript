import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
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
import CateManager from "./pages/CateManager";
import { addCate, listCate, removeCate, updateCate } from "./api/category";
import CateAdd from "./pages/CateAdd";
import { CateType } from "./types/categories";
import PrivateRouter from "./components/PrivateRouter";
import Category from "./pages/Category";
import CateEdit from "./pages/CateEdit";

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<ProductType[]>([]);
  const {id} = useParams();
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
      // console.log(data)
    };
    getProducts();
    const getCategories = async () => {
      const { data } = await listCate();
      setCategories(data);
      // console.log(data)
    };
    getCategories();
    
  }, []);
 
  const onHandleRemove = async (id: number) => {
    await remove(id);
    setProducts(products.filter((item) => item._id !== id));
  };

  const onHandleAdd = async (product: ProductType) => {
    // console.log(product)
    const { data } = await add(product);
    // console.log(data);
    setProducts([...products, data]);
  }
  const onHandleUpdate = async (product:ProductType) => {
    // console.log(product)
    const {data} = await update(product)
    // console.log(data);
    setProducts(products.map(item => item._id == data._id ? data : item))
}
// Categories
  const onHandleAddCate = async (category: CateType) => {
    console.log(category);
    const {data} = await addCate(category);
    setCategories([...categories,data])
  }
  const onRemoveCate = async (id: number) => {
    await removeCate(id);
    setCategories(categories.filter((item) => item._id !== id));
  }
  const onUpdateCate = async (cate: CateType) => {
    const {data} = await updateCate(cate)
    // console.log(data);
    setCategories(categories.map(item => item._id == data._id ? data : item))
  }
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<WebLayout cate={categories} />}>
            <Route index element={<Product products={products} />} />
            <Route path="products/:id" element={<DetailProduct />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
            <Route path="category/:id" element={<Category />} />
          </Route>
          <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
            <Route index element={<Navigate to="product" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product">
              <Route index element={<ManagerProduct data={products} onRemove={onHandleRemove} />}/>
              <Route path="add" element={<ProductAdd onAdd={onHandleAdd} cate={categories}  />} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} cate={categories}/> } />
            </Route>
            <Route path="categories">
              <Route index element={<CateManager data={categories} onRemove={onRemoveCate}/> }/>
              <Route path="add" element={<CateAdd onAdd={onHandleAddCate}/>} />
              <Route path=":id/edit" element={<CateEdit onUpdate={onUpdateCate}/>}/>
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
