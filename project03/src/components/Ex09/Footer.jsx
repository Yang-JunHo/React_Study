import React, { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'

const Footer = () => {

    const { isDark,setIsDark } = useContext(ModeContext)
    const changeMode = () =>{
        // console.log(isDark);
        isDark == 'true' ? setIsDark('false') : setIsDark('true')
    }

  return (
    <div
        className='footer'
        style={{
            backgroundColor: isDark == 'true' ? 'black' : 'lightgray'
        }}>
        <button className='button' onClick={changeMode /** 또는 ()=>{setIsDark(!isDark)} */}>
        {isDark == 'true' ? '라이트모드' : '다크모드'}</button>
    </div>
  )
}

export default Footer