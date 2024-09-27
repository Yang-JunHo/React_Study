// React Toolkit 사용법
import { configureStore } from '@reduxjs/toolkit'
import postReducer from './reducer/postSlice'

const store = configureStore({
    reducer : {
        post : postReducer
    }
})
// reducer/reducer.js 파일은 old redux를 위한 파일
// toolkit을 위한 파일은 countSlice.js

export default store






// [Old Redux]
// import { createStore } from "redux";
// import reducer from "./reducer/reducer";

// const store = createStore(reducer)
// export default store;