import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


const Header = ({auth, setAuth}) => {

  const nav = useNavigate();

  const handleLogin = ()=>{
    if(auth){
      setAuth(!auth)
      nav("/")
    }else{
      nav("/Login")
    }
  }

  return (
    <div className='header-box'>
      <div className='header-box-logo'>
        {/* 메인페이지로 이동할 수 있는 로고를 생성하시오 */}
        <Link to= '/'><img src='https://cdn.bonif.co.kr/resources/web/css/images/logo_gnb.png'/></Link>
      </div>
      <div className='header-box-nav'>
        <ul className='header-box-nav-list'>
          {/* 각 메뉴 버튼 클릭 시, 메인은 /, 메뉴소개는 /menu/list로 이동 */}
          <li><Link to= '/'>메인</Link></li>
          <li><Link to= '/menu/list'>메뉴소개</Link></li>
        </ul>
      </div>
      <div className='header-box-util'>
        {/* auth에 따라 다르게 보여지게 만들 것
        - true : 로그아웃 / false : 로그인
        - 해당 버튼을 누르면 handleLogin 이라는 함수
        - handleLogin이 하는일 -> auth 토글
          로그아웃 -> auth 토글 + 메인창 이동
          로그인 -> 로그인 창으로 이동 */}
          {auth == true
          ? <button onClick={ handleLogin }>로그아웃</button>
          : <button onClick={ handleLogin }>로그인</button>}
      </div>
    </div>
  )
}

export default Header