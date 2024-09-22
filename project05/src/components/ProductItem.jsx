import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({productList}) => {
  const nav = useNavigate();
  
  return (
    <div className='product-container' onClick={() => {nav(`/detail/${productList.no}`)}}>
      <img width='100px' src={productList.src}/>
      <p>{ productList.title }</p>
      <p>{productList.price}원</p>
    </div>
  )
}

export default ProductItem