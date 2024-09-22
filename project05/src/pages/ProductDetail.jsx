import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetail = ({ list }) => {

  let {num} = useParams()
  console.log('게시물 번호 : ', num);
  console.log('list',list);
  
  const filteredList = list.filter (item => item.no == num)[0]
  console.log('filteredList', filteredList)
  return (
    <div className='list-container'>
      <div className='detail-item'>
        <p>상품명 : { filteredList.title }</p>
        <span>가격 : { filteredList.price }원</span>
        <br/>
        {filteredList.delivery == "free"
        ? <span>배송비 무료</span>
        : <span>배송비 : {filteredList.delivery}원</span>}
        <img width='100px' src={filteredList.src}/>
        <Link to = '/list'>목록으로 돌아가기</Link>
      </div>
    </div>
  )
}

export default ProductDetail