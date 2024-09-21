import React, { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'

const Header = () => {

    
    const { isDark } = useContext(ModeContext)
    // console.log("isDark value: ", isDark);
   
  return (
    <div className='header'
    
        style={{backgroundColor: isDark == 'true' ? 'black' : 'skyblue',
                color: isDark == 'true' ? 'white' : 'black'
        }}>
        <h1>인공지능사관학교</h1>
    </div>
  )
}

export default Header