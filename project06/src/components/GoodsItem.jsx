import React from 'react'
import { Link } from 'react-router-dom'

const GoodsItem = ({ goodsList }) => {
    // console.log('goodsList',goodsList);
    

    return (

        <div className='goods-item' style={{ position: 'relative' }}>
            <div className="goods-item-icon">
                {/* 해당 상품이 new상품, best상품인지 조건부 렌더링을 출력
                  삼항 연산자 이중으로 사용 */}
                {goodsList.new == true
                    ?(goodsList.best == true
                        ? <em className="goods-new">new</em> && <em className="goods-best">best</em>
                        : <em className="goods-new">new</em>
                    )
                    : (goodsList.best == true
                        ? <em className="goods-best">best</em>
                        : ""
                    )}
            </div>

            <div className="goods-thumb">
                {/* 이미지 클릭 시, Link 컴포넌트를 통해 상세 페이지
                    상세페이지 URL : /menu/상품id번호 */}
                <Link to={`/menu/${goodsList.id}`}>
                    <img src={goodsList.main_thumb} />
                </Link>
            </div>

            <div className="goods-name">
                <h4>{goodsList.name}</h4>
                <p>
                    <span>{goodsList.price}</span>원
                </p>
            </div>

        </div>
    )
}

export default GoodsItem