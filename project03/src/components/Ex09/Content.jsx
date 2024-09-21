import React, { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'

const Content = () => {

    const {isDark} = useContext(ModeContext)

  return (
    <div 
        className='content'
        style={{
            backgroundColor: isDark == 'true' ? 'black' : 'white',
            color: isDark == 'true' ? 'white' : 'black'
        }}>
        <p>안녕하세요 감사합니다 죄송합니다</p>
    </div>
  )
}

export default Content