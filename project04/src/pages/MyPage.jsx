import React from 'react'
import { Link } from 'react-router-dom'

const MyPage = () => {
  return (
    <div>MyPage
        <hr/>
        <h3>내가 쓴 글</h3>
        <div>
            <Link to="/product/1">
                <p>[1] 캠핑용품 거래하실 분</p>
            </Link>
            <Link to="/product/2?best=true&new=true">
                <p>[2] SQLD 스터디 하실 분</p>
            </Link>
            <Link to="/product/3">
                <p>[3] 공모전 하실 분</p>
            </Link>
        </div>
    </div>
  )
}

export default MyPage