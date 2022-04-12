import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { listCate } from '../api/category'
import { CateType } from '../types/categories'

type Props = {}

const CateList = (props: Props) => {
    const [category,setCategory] = useState<CateType[]>([])
    useEffect(() => {
        const getCate = async () => {
            const {data} = await listCate();
            setCategory(data)
        }
        getCate();
    },[])
  return (
    <div className='row mb-3'>
        {category && category.map((item,index) => {
            return <div className='col' key={index}>
              
            <NavLink className='btn btn-secondary' to={`category/${item._id}`} >{item.name}</NavLink>
          </div>
        })}
    </div>
  )
}

export default CateList