import React, { useEffect, useState } from 'react'

const Ex16 = () => {
    const pos = ['왼쪽', '정면', '오른쪽']

    const [myPos, setMyPos] = useState('정면') 
    const [comPos, setComPos] = useState('정면')

    const [round, setRound] = useState(1)
    const [result, setResult] = useState('시작 전')

    const posRandom = (e) => {
        setMyPos(e.target.innerText)
        setComPos(pos[parseInt(Math.random() * 3)])
        setRound(round+1)
    }

    useEffect(()=>{
        if(round > 1){
            if(myPos == comPos){
                setResult('승리!')
            } else{
                setResult('패배..')
            }
        }
    },[round])

  return (
    <div>
        <h1>참참참</h1>
        <p>나의 선택 : {myPos}</p>
        <p>상대의 선택 : {comPos}</p>
        <b>{result}</b>
        <hr/>
        {pos.map(item => <button key={item} onClick={posRandom}>{item}</button>)}
    </div>
  )
}

export default Ex16