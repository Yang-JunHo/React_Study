import React from 'react'
import ProductItem from '../components/ProductItem';



const ProductList = ({ list }) => {
  console.log('list', list);


  return (

    <div className='list-container'>
      {list.map(item => <ProductItem key={item.no} productList={item} ></ProductItem>)}
    </div>
  )
}

export default ProductList