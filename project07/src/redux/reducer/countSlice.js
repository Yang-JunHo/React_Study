import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    num : 0
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment(state,action){
            console.log('increment', action.payload)
            state.num += action.payload
        },
        decrement(state,action){
            console.log('decrement', action.payload)
            state.num -= action.payload
        },
        incrementAmount(state,action){
            console.log('incrementAmount', action.payload)
            state.num += action.payload
        },
        decrementAmount(state,action){
            console.log('decrementAmount', action.payload)
            state.num -= action.payload
        }
    }
})

// Component에서 reducer함수를 실행할 수 있도록 내보내기
export const counterActions = counterSlice.actions

// store에서 reducer에 접근할 수 있도록 내보내기
export default counterSlice.reducer