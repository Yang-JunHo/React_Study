import React, { useState } from 'react'
import Header from '../components/Ex09/Header'
import Content from '../components/Ex09/Content'
import Footer from '../components/Ex09/Footer'
import '../css/ex09.css'
import { ModeContext } from '../context/ModeContext'

const Ex09 = () => {

    /* 다크모드와 라이트모드를 만들어 보자!
        1. 다크모드와 라이트모드를 구분하는  state선언(true/false)
            - isDark true라면 다크모드 /아니면 라이트모드
        2. isDark를 전역적으로 사용하기 위해서 context세팅
            2.1. ModeContext라는 파일 생성 -> create
            2.2. Ex09에서 Context를 사용할 수 있도록 감싼후 Provider 생성
            2.3. isDark, setIsDark를 Provider로 전달
        3. '다크모드'라는 버튼을 클릭 했을때, backgroundColor를 black, color를 white로 변경
            =>삼항연산자
        4. '다크모드'라는 버튼을 클릭했을때 버튼의 글자가 '라이트모드'로 변경
        5. '라이트모드'클릭시 다시 원래대로 돌려놔
    */

        const [isDark, setIsDark] = useState(false)

  return (
    <ModeContext.Provider value={{isDark, setIsDark}}>
    <div className = 'page'>
        <Header/>
        <Content/>
        <Footer/>
    </div>
    </ModeContext.Provider>
  )
}

export default Ex09