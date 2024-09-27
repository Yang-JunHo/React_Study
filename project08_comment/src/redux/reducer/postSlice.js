import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    post : [],
    keyword : ""
}

// slice를 쓸 때, export하는 경우 3가지 : slice, actions(component로 보내줌), reducer(default, store로 보내줌)

export const postSlice = createSlice({
    name : 'Poster',
    initialState,
    reducers : {
        addPost(state, action){
            // state.post = [... state.post, action.payload]
            state.post.push(action.payload)
        },
        searchKeyword(state, action){
            state.keyword = action.payload
        }
    }
})


// Component에서 reducer함수를 실행할 수 있도록 내보내기
export const postActions = postSlice.actions

// store에서 reducer에 접근할 수 있도록 내보내기
export default postSlice.reducer

