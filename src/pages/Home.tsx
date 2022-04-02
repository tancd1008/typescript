import React from 'react'
import { ProductType } from '../types/product'

type ProductsProps = {
  data: ProductType[]
}

const Home = (props: ProductsProps) => {
  console.log(props.data);
  
  
  return (
    <div className=''>
      <div>
        <div className='row'>
          {props.data && props.data.map(item => {
            return <div className='col-3'>
              <div>{item.name}</div> 
              <img src={item.img} alt="" />
              <span>{item.price}</span>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Home