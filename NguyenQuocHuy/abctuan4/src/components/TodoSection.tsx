import React, { Component } from 'react'

export default class TodoSection extends Component {
    constructor(props:any){
        super(props);
        this.state = {input :''};
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleChange(event:any){
        this.setState({
            input :event.target.value
        });
       
        
    }
    onHandleSubmit(event:any){
            event.preventDefault();
            console.log(this.state);
    }

    render() {
        return (
             <React.Fragment>
                <div className="row m-1 p-3">
                    <div className="col col-11 mx-auto">
                        <form className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center" onSubmit={this.onHandleSubmit}>
                            <div className="col">
                                <input className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" 
                                      type="text" placeholder="Add new .." name ="txtName" onChange={this.onHandleChange}></input>
                            </div>
                            <div className="col-auto m-0 px-2 d-flex align-items-center">
                                        <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">Due date not set</label>
                                        <i className="fa fa-calendar my-2 px-1 text-primary btn due-date-button" data-toggle="tooltip" data-placement="bottom"
                                         title="Set a Due date"></i>
                                    
                            </div>
                            <div className="col-auto px-0 mx-0 mr-2">
                                    <button type="submit" className="btn btn-primary" >Add</button>
                                </div>
                        </form>
                    </div>
                </div>
                <div className="p-2 mx-4 border-black-25 border-bottom"></div>
        </React.Fragment>
        )
    }
}
