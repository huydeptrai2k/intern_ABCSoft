import React from 'react'

function ListItem(props:any) {
    console.log(typeof props.date)
  
  
    return(
        <div className="row px-3 align-items-center todo-item rounded">
             <div className="col-auto m-1 p-0 d-flex align-items-center">
                     <h2 className="m-0 p-0">
                        {props.checkbox}
                    </h2>
               </div>
               <div className="col px-1 m-1 d-flex align-items-center">
                        {props.input}
                </div>
                <div className="col-auto m-1 p-0 px-3 ">
                  {props.date}
                </div>
                <div className="col-auto m-1 p-0 todo-actions">
                        <div className="row d-flex align-items-center justify-content-end">
                            <h5 className="m-0 p-0 px-2">
                                {props.edit}
                            </h5>
                            <h5 className="m-0 p-0 px-2">
                                {props.delete}
                            </h5>
                        </div>
                        <div className="row todo-created-info">
                            <div className="col-auto d-flex align-items-center pr-2">
                                <i className="fa fa-info-circle my-2 px-2 text-black-50 btn" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Created date"></i>
                               {props.label}
                            </div>
                        </div>
                    </div>

        </div>
    )
}

export default function TodoListSection() {
    return (
        
        <div className="row mx-1 px-5 pb-3 w-80">
            <div className="col mx-auto">
                <ListItem
                    checkbox ={
                        <React.Fragment>
                            <i className="fa fa-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as complete"></i>
                            <i className="fa fa-check-square-o text-primary btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Mark as todo"></i>
                        </React.Fragment>
                    }
                    input ={
                        <React.Fragment>
                             <input type="text" className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" readOnly value="Buy groceries for next week" title="Buy groceries for next week" />
                            <input type="text" className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none" defaultValue="Buy groceries for next week" />
                        </React.Fragment>
                    }
                    edit = { <i className="fa fa-pencil text-info btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Edit todo"></i>}
                    delete = {<i className="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete todo"></i>}
                    label = { <label className="date-label my-2 text-black-50">28th Jun 2020</label>}
                />
                 <ListItem
                    checkbox ={
                        <React.Fragment>
                             <i className="fa fa-square-o text-primary btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Mark as complete"></i>
                            <i className="fa fa-check-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as todo"></i>
                        </React.Fragment>
                    }
                    input ={
                        <React.Fragment>
                             <input type="text" className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" readOnly value="Renew car insurance" title="Renew car insurance" />
                            <input type="text" className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none" defaultValue="Renew car insurance" />
                        </React.Fragment>
                    }
                    date = {
                        <div className="row">
                            <div className="col-auto d-flex align-items-center rounded bg-white border border-warning">
                                <i className="fa fa-hourglass-2 my-2 px-2 text-warning btn" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Due on date"></i>
                                <h6 className="text my-2 pr-2">28th Jun 2020</h6>
                            </div>
                        </div>
                    }
                    
                    
                    edit = { <i className="fa fa-pencil text-info btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Edit todo"></i>}
                    delete = {<i className="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete todo"></i>}
                    label = { <label className="date-label my-2 text-black-50">28th Jun 2020</label>}
                />
                   <ListItem
                    checkbox ={
                        <React.Fragment>
                            <i className="fa fa-square-o text-primary btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Mark as complete"></i>
                            <i className="fa fa-check-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as todo"></i>
                        </React.Fragment>
                    }
                    input ={
                        <React.Fragment>
                            <input type="text" className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3 d-none" readOnly value="Sign up for online course" title="Sign up for online course" />
                            <input type="text" className="form-control form-control-lg border-0 edit-todo-input rounded px-3"defaultValue="Sign up for online course" />
                        </React.Fragment>
                    }
                   
                    delete = {<i className="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete todo"></i>}
                    label = { <label className="date-label my-2 text-black-50">28th Jun 2020</label>}
                />
           
           
                
            </div>
        </div>
        
    )
}

