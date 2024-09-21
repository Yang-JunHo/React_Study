import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Board from '../components/Board';
import '../css/ex04.css'
import { useState } from 'react'


const Ex04 = () => {

    /** 주사위 게임을 해보자! 
        1. 유저는 던지기 버튼을 누른다 => throwDice라는 함수를 실행시킨다.
        2. 던지기 버튼을 눌렀을 때, 나의 숫자 (myDice)도 랜덤으로 1~6까지 중 하나
            컴퓨터의 숫자 (comDice)도 랜덤으로 1~6까지 중 하나
        3. Ex04 상위 컴포넌트에서 Board라는 하위 컴포넌트로 값을 전송
            (나 - 컴퓨터 / 각각 두개가 가진 숫자를 전달)
        4. 나온 숫자에 따라서 주사위 모양을 다르게 세팅
        5. 나 < 컴퓨터, 나 == 컴퓨터 : 패배
           나 > 컴퓨터 : 승리
           if문 사용 말고 삼항연산자로 처리
        6. 유저가 RESET 버튼을 누른다 => resetDice라는 함수를 실행
        7. RESET 버튼을 눌렀을때, 내 주사위 1/ 컴퓨터 주사위 1
    */
    const [myDice, setMyDice] = useState(1) // state선언
    const [comDice, setComDice] = useState(1) // state선언

    const[result, setResult] = useState('시작 전')
    const[round, setRound] = useState(1)
    // myDice나 comDice로 변화를 감지할 경우, 적은 확률이지만 두개가 두판다 같은 값이 나올 수도 있음
    // => 그럴 경우에는 감지 X => 이를 방지하기 위해 round 설정

    const throwDice = () => {
        setMyDice(parseInt(Math.random() * 6) + 1) // 1~6까지의 랜덤숫자 뽑는 법
        setComDice(parseInt(Math.random() * 6) + 1) // 1~6까지의 랜덤숫자 뽑는 법
        setRound(round+1)
        // console.log(parseInt(Math.random() * 6) + 1);
        // console.log(parseInt(Math.random() * 6) + 1);
    }

    const resetDice = () => {
        setMyDice(1) // 1~6까지의 랜덤숫자 뽑는 법
        setComDice(1) // 1~6까지의 랜덤숫자 뽑는 법
        setRound(1)
    }

    useEffect(()=>{
        console.log('round', round);
        if (round > 1){
            if(myDice>comDice){
                setResult('승리')
            } else if(myDice<comDice){
                setResult('패배')
            } else{
                setResult('무승부')
            }
        }
    },[round])

    return (
        <div className='box'>
            <h1>주사위 게임</h1>

            <div>
                <Button variant="warning" onClick={throwDice}>던지기</Button>{" "}
                <Button variant="danger" onClick={resetDice}>RESET</Button>
            </div>
            <div className='board-container'>
                <Board name="나" Dicenum={myDice}  />
                <Board name="컴퓨터" Dicenum={comDice}  />
            </div>

            {/* useEffect 배우기 이전 작성 */}
            {/* {myDice > comDice ? (<h2>승리!</h2>) : (<h2>패배!</h2>)} */}
            
            <h2>{result}</h2>

        </div>
    )
}

export default Ex04