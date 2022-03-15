import React from 'react'
import type { ProductType } from '../types/product'
type ShowInfoProps = {
  info: ProductType
}
const ShowInfo = (props: ShowInfoProps) => {
  return (
    <h1>
      {props.info.name}
    </h1>
    
  )
}

export default ShowInfo