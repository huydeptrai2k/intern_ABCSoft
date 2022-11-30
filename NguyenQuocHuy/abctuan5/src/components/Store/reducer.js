import { SET_TODO_INPUT ,ADD_TODO,DELETE_TODO,UPDATE_TODO,SET_INDIT_TODO,SET_EDIT_TODO} from "./constants"
const initState = {
    todos:['Buy groceries for next week','Renew car insurance','Sign up for online course'],
    todoInput:''
}
const reducer = (state ,action) =>{
    const newTodos = [...state.todos]
    switch(action.type){
        //...
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput:action.payload
            }
        case ADD_TODO :
            return {
                ...state,
                todos: [...state.todos,action.payload]
            }
        case SET_INDIT_TODO :
                return {
                    ...state,
                   indit: action.payload
                }
        case SET_EDIT_TODO :
                    return {
                        ...state,
                       edit: action.payload
                    }
                     
        case DELETE_TODO: 
            newTodos.splice(action.payload,1)

            return {
                ...state,
                todos: newTodos
            }
        case UPDATE_TODO:
            newTodos[action.payload.index] = action.payload.value
            return {
                ...state,
                todos: newTodos
            }
        default:
            throw new Error('Invalid action.')
            
    }
}
export{initState}
export default reducer