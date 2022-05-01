import * as actions from './ItemActions'
export const initialState = {
    posts:[],
    loading:false,
    hadErrors:false
}

export default function itemReducer(state = initialState,action){

    switch(action.type){

        case actions.GET_POSTS:
            return {...state,loading:true}
        case actions.GET_POSTS_SUCCESS:
            return {posts:action.payload,loading:false,hasErrors:false}
        case actions.GET_POSTS_FAILURE:
            return {...state,loading:false, hasErrors:true}
        default:
            return state
    }
}