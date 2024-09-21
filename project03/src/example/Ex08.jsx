import React, { useState } from 'react'
import ColorResult from '../components/ColorResult'
import ColorList from '../components/ColorList'
import { ColorContext } from '../context/colorContext'

const Ex08 = () => {

    /* Context란? 리액트 컴포넌트 간에 값을 전역적으로 공유할 수 있게 해주는 기능
    
        Q. props로만 데이터를 전달했을 때 발생할 수 있는 문제?
        A. 깊숙히 위치한 컴포넌트에 데이터를 전달해야 하는 경우
            => 여러 컴포넌트를 연달아서 props 설정
            => 이 과정에서 실수가 잦음
            이런 현상을 props drilling 이라고 부름

            그래서 전역적으로 데이터를 보관해줄 context를 생성해서 관리한다.

        [만드는 순서]
        1. context 파일을 만들어 준다.
            - createContext (꼭 import까지 함께)
            - export const ~~~

        2. context를 사용할 컴포넌트에 import

        3. Context Provider로 컴포넌트들을 감싸준다.
            => 사실상 내 데이터를 관리해주는 건 Provider 꼭 필요!!
            => value라는 속성에 관리하고자 하는 데이터들을 넣기 (state, 함수 등)
            
        4. 데이터를 쓰고 싶은 곳에서 useContext를 통해 데이터를 가져온다.
            const {쓰고 싶은 데이터} = useContext(Context경로)
    */

    // context provider를 적는 부분에 state 관리
    const [ckColor, setCkColor] = useState('blue')

  return (
    <ColorContext.Provider value={{ckColor, setCkColor}}>
        <div>
            <h1>색상 변경하기</h1>
            <ColorList/>
            <hr/>
            <h1>선택한 색상은?</h1>
            <ColorResult/>
        </div>
    </ColorContext.Provider>
  )
}

export default Ex08