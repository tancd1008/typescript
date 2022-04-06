import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { readCate } from '../api/category';
import { CateType } from '../types/categories'
import { ProductType } from '../types/product';

type ProductProps = {
}

const Category = (props: ProductProps) => {    
  const [products,setProducts] = useState<ProductType>();
  const { id } = useParams();

  useEffect(() => {
      const getCate = async () => {
          const {data} = await readCate(id)
          setProducts(data);
      }
      getCate()

  },[])
  return (
      
    <div>
        <div className='row '>
            
        </div>
    </div>
  )
}

export default Category