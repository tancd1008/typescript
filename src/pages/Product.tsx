import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductType } from '../types/product'

type ProductProps = {
  products: ProductType[]
  
}

const Product = (props: ProductProps) => {
  console.log(props.products)
  return (
    <div>
       <div className=''>
      <div>
        <div className='row'>
          {props.products && props.products.map((item,index) => {
            return <div className='col-3' key={index}>
              <NavLink to={`/products/${item._id}`}>
                <div>{item.name}</div> 
                <img src={item.img} alt="" />
                <span>{item.price}</span>
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