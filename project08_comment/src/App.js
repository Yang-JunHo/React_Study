import './App.css';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import SearchBox from './components/SearchBox';


function App() {

  /**
    [과제 1] 게시글을 등록해보자! 

    1-1) CommentForm 에서 사용자가 작성한 내용과 작성자의 값 => useRef 

    const 변수 = useRef()
    <div ref={변수}>
    => 변수.current.value

    1-2)  Post 버튼을 눌렀을 때 handlePost 라는 함수를 실행 

    1-3) handlePost 라는 함수가 실행된다면 redux에 접근 
        - type : "addPost"
      - payload : post랑 writer 

    1-4) reducer 로 가서 action의 type 이 addPost 인경우 posts 라는 배열에 새로운 값을 쌓아주겠다 
    - 여기서 새로운 값은 '객체' 형식으로 배열을 쌓아준다 

    [ {writer : '선영표', post : "어제 열라면 진짜 맛있었는데.."},
    {writer : '임명진', post : "영표쌤 책상정리 안하시나요?"},
    ]

    1-5) redux에 있는 posts 배열을 기반으로 CommentList로 가서 map 함수 
      -> CommentItem props로 데이터를 쌓아보자. 
  */



  return (
    <div style={{ padding: '7%' }}>
      <h1 style={{ textAlign: 'center' }}>Twitter</h1>
      <div>
        <SearchBox />
        <hr />
        <CommentForm />
        <hr />
        <CommentList />
      </div>
    </div>
  );
}

export default App;
