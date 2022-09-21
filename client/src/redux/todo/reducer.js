import {ADD_ITEM, CHANGE_IS_DONE, CHANGE_TODO, DELETE_TODO} from './action.js'

export const initialState = {
    list: [],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TODO:
            return {
                ...state,
                list: action.payload.list,
            }
        case DELETE_TODO:
            return {
                ...state,
                list: state.list.filter((item) => item.id !== action.payload.id),
            }
        case ADD_ITEM:
            return {
                ...state,
                list: [...state.list, action.payload.item]
            }
        case CHANGE_IS_DONE:
            return {
                ...state,
                list: state.list.map(item => {
                    if(item.id === action.payload.id){
                        item.isDone = true;
                    }
                    return item
                })
            }
        default:
            return state
    }
}

export default todoReducer;
