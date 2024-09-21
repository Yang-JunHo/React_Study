import React, { useState } from 'react'
import Ex07Subitem from '../components/Ex07Subitem'

const Ex07 = () => {

    /** 리액트는 기본적으로 단방향 데이터 흐름을 가지고 있다.
        상위(부모) 컴포넌트에서 하위(자식) 컴포넌트로 값을 전달하는 것은 가능하지만 반대 방향으로는 전달 불가함

        => 그래서 상위 컴포넌트에서 하위 컴포넌트로 '함수'를 전달하고, 그 함수의 매개변수를 통해 하위 컴포넌트에서 상위 컴포넌트로 값을 전달
    */

    // 1-1,1-2 텍스트를 담아둘 공간
    const [text, setText] = useState('')

    const changeData = (e) => {
        // console.log('입력한 텍스트', e.target.value);
        setText(e.target.value)
    }

    // 2-1,2-2 텍스트를 담아둘 공간
    const [text2, setText2] = useState('')

    // 하위 -> 상위 데이터 전달하기 위한 함수
    const changeData2 = (e) =>{
        console.log('changeData2');
        setText2(e.target.value)
    }
    
  return (
    <div>
        <h2>컴포넌트끼리 값 전달을 해보자!</h2>
        <p>
            1-1. 상위에서 입력한 정보 : <input type='text' onChange={changeData}/>
        </p>
        <Ex07Subitem text = {text} changeData2 = {changeData2} text2 = {text2}/>
        <p>2-2. 하위에서 작성한 정보를 상위에서 입력받기 : {text2}</p>
    </div>
  )
}

export default Ex07