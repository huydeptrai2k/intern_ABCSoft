import { SET_TODO_INPUT ,ADD_TODO,DELETE_TODO,UPDATE_TODO,SET_INDIT_TODO,SET_EDIT_TODO} from "./constants";

export const setTodoInput = payload => ({
    type:SET_TODO_INPUT,
    payload
})
export const addTodo = payload => ({
    type:ADD_TODO,
    payload
})
export const deleteTodo = payload => ({
    type:DELETE_TODO,
    payload
})
export const updateTodo = payload => {
    return {
        type: UPDATE_TODO,
        payload
    }
}
export const setIndit = payload => {
    return {
        type: SET_INDIT_TODO,
        payload
    }
}
export const setEdit = payload => {
    return {
        type: SET_EDIT_TODO,
        payload
    }
}