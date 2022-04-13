import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { readCate } from '../api/category'
import { ProductType } from '../types/product'

type ProductsProps = {
    categoryId:any
}

const ProductsSimilar = ({categoryId}: ProductsProps) => {
    const[products,setProducts] = useState<any>()
    useEffect(() => {
        const getProducts = async () => {
            if(categoryId){
                const {data} = await readCate(categoryId)
                setProducts(data)
            }
        }
        getProducts()
    },[categoryId])

  return (
    <div>
        <div className='row '>
            {products && products.product.map((item:ProductType,index:any) => {
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

export default ProductsSimilar