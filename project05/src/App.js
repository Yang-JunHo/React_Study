import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Header from './components/Header';
import Footer from './components/Footer';
import axios from './axios';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {


  /*
    [ 과제 1) public 폴더에 포함되어있는 bestList.json 파일을 가져와보자!] 
    1. App.js 파일에서 bestList.json 파일을 가져온다. 
   - public 폴더에 있기 때문에 그 파일은 본인의 고유 주소를 가진다. 
   - axios 를 통해서 그 데이터를 가져올 것 (get방식) 
   - 그 데이터안에 들어있는 배열을 state로 보관 (state이름 list, setList) 

    2. list안에 있는 배열을 ProductList 라는 자식 컴포넌트에게 전달 


    [ 과제 2) 가져온 데이터를 기반으로 list 를 꾸며보자 ] 

    1. props를 통해 받은 list로 ProductItem.jsx <- 을 렌더링 해보자 
    2. map 함수를 이용해서 여러개의 ProductItem을 렌더링 
    3. productItem 안에 있는 div의 클래스 네임을 product-container
   - 상품 이미지  
   - 상품의 타이틀 
   - 상품의 가격 
  */
  const [list, setList] = useState([])

  useEffect(() => {
    // 본인의 고유한 주소를 가지고 있는 데이터를 가져다 쓰겠다?
    // => axios로 요청 
    // => useEffect를 사용
    
    axios.get('/bestList.json')
      .then(res => {
        console.log('axios res', res.data.list);
        setList(res.data.list)
      })
      .catch(err => console.error(err))
  }, [])

  return (

    <div className='container'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/list' element={<ProductList list={list}/>} ></Route>
        <Route path='/detail/:num' element={<ProductDetail list={list}/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
