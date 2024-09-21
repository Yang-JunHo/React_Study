import React, { Component } from 'react'

export default class Ex14 extends Component {

  /* Class Component
      - React는 Class, Function 모두 사용 가능
      - state, LifeCycle 등은 함수형에는 없다.
      - 리액트 훅이 도입되면서 그 기능들을 함수형에서도 사용할 수 있게 되었다.
      - use ~ => 리액트 훅

      - 함수형 프로그래밍이 유행하게 되면서 React에서도 도입하기 위해
        리액트 훅이 생겨나게 됨
  */

  // 3) 화면이 렌더링 된 직후 실행
  //    => API Call, 무거운 데이터, 타이머
  //    사용자들은 조금이라도 화면이 먼저 뜨면 "빠르다"라고 느낌
  //    그렇기 때문에 무거운 데이터 들은 일부 화면을 띄운 후 가져오기
  componentDidMount() {
    // console.log('3. componentDidMount');
  }

  // 4) 갱신이 일어난 직후 실행
  //    => state나 props의 값이 갱신됐을 때 (useRef는 포함X)
  componentDidUpdate() {
    // console.log('state나 props가 변경되었을때 실행');
  }

  // 1) 생성자 : 최초 생성
  // => state관리, 변수 선언, 함수 선언, 화면을 구성하기 위한 초기 데이터 관리
  constructor(props) {
    super(props)

    // console.log('1. constructor');


    this.state = {
      num: 0
    }

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  // 증가 함수
  handleIncrement() {
    // console.log('increment');
    this.setState({
      num: this.state.num + 1
    })
  }

  // 감소 함수
  handleDecrement() {
    // console.log('increment');
    this.setState({
      num: this.state.num - 1
    })
  }


  // 2) render : 화면 구성하는 요소
  //    render에 사용할 state나 함수는 생성자에 이미 만들어져 있어야 한다.
  render() {
    // console.log('2. render')
    return (
      <div>
        <h1> Counter {this.state.num} </h1>
        <button onClick={this.handleIncrement}>+1</button>
        <button onClick={this.handleDecrement}>-1</button>
      </div>
    )
  }
}
