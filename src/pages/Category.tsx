import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { readCate } from '../api/category';
import CateList from '../components/CateList';
import { CateType } from '../types/categories'
import { ProductType } from '../types/product';

type ProductProps = {
  
}
type product = {
  cate: CateType[];
  product: ProductType[]
}

const Category = (props: ProductProps) => {    
  const [products,setProducts] = useState<product>();
  const { id } = useParams();

  useEffect(() => {
      const getCate = async () => {
          const {data} = await readCate(id)
          setProducts(data);
      }
      getCate()

  },[id])
  return (
      
    <div>
        <div className='row'>
          {/* <CateList/> */}
        </div>
        <div className='row '>
            {products && products.product.map((item,index) => {
              return <div className='col-3 border border-3 mb-3 ' key={index}>
              <NavLink to={`/products/${item._id}`}>
                <div className='fw-bolder inline-block text-gray-900'>{item.name}</div> 
                <img src={item.img} alt="" />
                <span className='inline-block text-danger'>{item.price}$</span>
              </NavLink>
            </div>
            })}
        </div>
    </div>
  )
}

export default Category