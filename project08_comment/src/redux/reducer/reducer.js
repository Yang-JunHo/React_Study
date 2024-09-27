let initialState = {
    post : [],
    keyword : ""
}

const reducer = (state = initialState, action) => {
    
    if(action.type === "addPost"){
        return{ ...state, post : [...state.post, action.payload]}
    }

    if(action.type === "searchKeyword"){
        return{...state, keyword : action.payload}
    }
    return {...state}
}

export default reducer