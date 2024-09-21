import React from 'react'
// import img from '../img/img.jpg'
import { useState } from 'react'

const Ex02 = () => {

    /* React에서 정적인 요소를 가지고 오는 방법 2가지 (이미지)
        1) src 폴더에 접근
            - import 이미지 변수 from 경로
            - <img src = {이미지변수}>
        2) public 폴더에 접근
            - public 폴더는 폴더 자체가 서버와 통신이 가능하다.
            - public 폴더 내에 img폴더를 만든 후 파일을 보관
                => 별도의 import없이 바로 주소로 접근
            - static 파일들은 public에 저장
    
    */

    // STEP 1. 검정하트를 클릭 했을때, handleLike라는 함수를 실행
    // STEP 2. handleLike 함수가 실행 되었을 때, 현재 좋아요가 0개라면
    //          좋아요 0개 -> 1개 / 검정하트 => 빨간하트
    // STEP 3. handleLike 함수가 실행되었을때, 현재 좋아요가 1개라면
    //          좋아요 1개 -> 0개 / 빨간하트 => 검정하트

    // 이때, 모든 값은 화면에 바로 반응해야함 (state 활용 필요)
    // 힌트) emoji, likeNum 이라는 state를 사용할 예정


    const [emoji, setEmoji] = useState("🖤") // state선언
    const [likeNum, setLikeNum] = useState(0) // state선언

    const handleLike = () => {
        if (likeNum == 0) {
            setEmoji("❤️")
            setLikeNum(likeNum + 1) 

        } else {
            setEmoji("🖤")
            setLikeNum(likeNum - 1) 

        }
    }

    return (
        <div>
            {/* <img width='300px' src={img}></img> */}
            <img width='300px' src="/img/img.jpg" ></img>
            <p>
                <span onClick={handleLike} style={{cursor: 'pointer'}}>{emoji}</span>
                <span>좋아요 {likeNum}개</span>
            </p>
        </div>
    )
}

export default Ex02