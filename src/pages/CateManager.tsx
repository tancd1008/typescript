import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CateType } from '../types/categories';
import { ProductType } from '../types/product';

type ManagerCateProps = {
    data: CateType[]
}

const CateManager = (props: ManagerCateProps) => {
  
  
  return (
    <div>
        <table className="table ">
        <thead>
          <tr className="table-primary">
            <th>#</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data && props.data.map((item,index) => {
              return (
                  <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name} </td>
                      <td></td>
                  </tr>
              )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CateManager