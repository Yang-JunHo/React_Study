import { Routes, Route } from 'react-router-dom'
import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from "./page/Main";
import Login from "./page/Login";
import GoodList from "./page/GoodList";
import PrivateRoute from './routes/PrivateRoute';

/* [과제2] Header를 완성시켜라 
-> 주석으로 문제를 드린 상태 

[과제3] '메뉴소개' 페이지를 완성시키자.
-> 사전 과제 : public - goods.json 파일 생성 
-> 단톡방 복붙 

   3-1) GoodsList.jsx 파일로 가서 axios를 통해 상품정보를 가진 URL 로 데이터를 요청한다.
      (이 때, 데이터 요청은 화면 최초 렌더링 이후에 진행) 

   3-2) 응답받은 데이터를 상품리스트를 넣어두는 state에 보관 
      (App.js 에 있는 state 중 하나를 props로 넘겨줘야함) 

   3-3) 상품 리스트 안에 있는 정보를 map 함수를 활용하여 출력하시오. 
         - GoodsItem 를 출력 

[과제4] GoodsItem 목록 
-> 주석으로 문제 드릴 예정
[과제5] 로그인 상태/ 로그아웃 상태 구현
-> 로그인 버튼을 클릭시 handleSubmit 함수 실행
-> e.preventDefault() - 이벤트 동작을 중지시키는 함수
-> 우리의 권한을 true로 변경
-> 메인 페이지로  */


function App() {

  const [auth, setAuth] = useState(false)
  const [goods, setGoods] = useState([])

  return (
    <div>
      <Header auth={auth} setAuth={setAuth}></Header>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/Login' element={<Login setAuth ={setAuth}/>}></Route>
        <Route path='/menu/list' element={<GoodList goods={goods} setGoods ={setGoods}/>}></Route>

        {/* 로그인 상태에 따라 다른 페이지로 이동되도록 구현 */}
        <Route path='/menu/:num' element={<PrivateRoute auth={auth}  goods={goods}/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
