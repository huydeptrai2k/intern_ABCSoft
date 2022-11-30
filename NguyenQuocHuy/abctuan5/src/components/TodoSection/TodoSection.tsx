import React,{useState , useRef} from 'react';
import { actions, useStore } from '../Store';
import ListTodo from '../ListTodoSection/ListTodo';
export default function TodoSection(props:any) {
    const [state,dispatch] = useStore()
    const {todos,todoInput,indit,edit} = state
    const inputRef = useRef()
    
    const [editing, setEditing] = useState(false)
   // const [edit, setEdit] = useState()
    
    console.log("da den day la todosection",editing)
   const handleAdd = () =>{
    if (todoInput) {
        dispatch(actions.addTodo(todoInput))
        dispatch(actions.setTodoInput(''))
    }
   // setEditing(true)
   }
   
   const handleUpdate = () => {
    dispatch(actions.updateTodo({
        index: indit,
        value: todoInput
    }))
    dispatch(actions.setTodoInput(''))
    setEditing(false)
    dispatch(actions.setEdit(false))
    
}

   console.log(indit,'jdjadjasjdasj')
  return (
    <React.Fragment>
        <div className="row m-1 p-3">
            <div className="col col-11 mx-auto">
                <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                    <div className="col">
                        <input className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" 
                            type="text" 
                            placeholder="Add new .." 
                            value={todoInput}
                            onChange={e =>(
                                dispatch(actions.setTodoInput(e.target.value))
                            )}></input>
                    </div>
                    <div className="col-auto m-0 px-2 d-flex align-items-center">
                                <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">Due date not set</label>
                                <i className="fa fa-calendar my-2 px-1 text-primary btn due-date-button" data-toggle="tooltip" data-placement="bottom"
                                title="Set a Due date"></i>
                            
                    </div>
                    <div className="col-auto px-0 mx-0 mr-2">
                    {edit ? 
                    <button  
                      className="btn btn-primary"
                       onClick={handleUpdate}
                       >Update
                       </button> :<button  
                            className="btn btn-primary"
                            onClick={handleAdd}
                             >Add
                             </button>
                             
                    }
                    </div>
                    
                </div>
            </div>
           
        </div>
      
        <div className="p-2 mx-4 border-black-25 border-bottom"></div>
    </React.Fragment>
  )
}
