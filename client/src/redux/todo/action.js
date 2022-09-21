export const CHANGE_TODO = 'CHANGE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const ADD_ITEM = 'ADD_ITEM'
export const CHANGE_IS_DONE = 'CHANGE_IS_DONE'

export const changeTodo = (list) => {
    return {
        type: CHANGE_TODO,
        payload: { list },
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_TODO,
        payload: { id },
    }
}

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: { item }
    }
}

export const changeIsDone = (id) => {
    return {
        type: CHANGE_IS_DONE,
        payload: {id}
    }
}
