import React from 'react'
import { NavLink } from 'react-router-dom'
import CateList from '../components/CateList'
import { ProductType } from '../types/product'

type ProductProps = {
  products: ProductType[]
}

const Product = (props: ProductProps) => {
  
  return (
    <div className=''>
        <div className='row'>
          <CateList/>
        <div>
        <div className='row '>
          {props.products && props.products.map((item,index) => {
            return <div className='col-3 border border-3 mb-3 card ' key={index}>
              <NavLink to={`/products/${item._id}`}>
                <div className='fw-bolder inline-block text-gray-900'>{item.name}</div> 
                <img src={item.img} alt="" />
                <span className='inline-block text-danger'>{item.price}$</span>
              </NavLink>
            </div>
          })}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Product