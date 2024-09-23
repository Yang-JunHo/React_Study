import React from 'react'
import GoodsItem from '../components/GoodsItem'
import axios from '../axios';
import { useEffect } from 'react';

const GoodList = ({ goods, setGoods }) => {

  useEffect(() => {
    // 본인의 고유한 주소를 가지고 있는 데이터를 가져다 쓰겠다?
    // => axios로 요청 
    // => useEffect를 사용
    
    axios.get('/goods.json')
      .then(res => {
        setGoods(res.data.goods_list)
      })
      .catch(err => console.error(err))
  }, [])
  
  return (
    <div className='goods-list'>
      {goods.map(item => <GoodsItem key={item.id} goodsList = {item}/>)}
    </div>
  )
}

export default GoodList