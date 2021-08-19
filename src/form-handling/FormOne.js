import React, { Component } from 'react'

class FormOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             country: '',
             gender: '',
             isActive: false
        }
    }

    getFormData = (event) =>{
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <h1>Form Component</h1>
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" 
                              className="form-control w-50" 
                              value={this.state.username}
                              onChange={(event) => this.setState({username: event.target.value})}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Comments &nbsp;&nbsp;</label>
                        <textarea className="form-control w-50" 
                                  value={this.state.comments}
                                  onChange={(event) => this.setState({comments: event.target.value})}
                        ></textarea>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Country &nbsp;&nbsp;</label>
                        <select className="form-select w-50"
                                value={this.state.country}
                                onChange={(event) => this.setState({country: event.target.value})}
                        >
                            <option value="">Select</option>
                            <option value="1">India</option>
                            <option value="2">Japan</option>
                            <option value="3">Australia</option>
                        </select>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Gender : &nbsp;&nbsp;</label>
                        <input type="radio" 
                               className="forcm-check-input" 
                               name="gender" 
                               value={0}
                               onChange={(event) =>this.setState({gender: event.target.value}) }
                        
                        /> Male &nbsp;&nbsp;
                        <input type="radio" 
                               className="forcm-check-input" 
                               name="gender"
                               value={1}
                               onChange={(event) =>this.setState({gender: event.target.value})}
                        /> Female &nbsp;&nbsp;
                    </div>
                    <br />
                    <div className="form-group">
                        <label>IsActive &nbsp;&nbsp;</label>
                        <input type="checkbox" 
                               className="form-check-input"
                                checked={this.state.isActive}
                                onChange={()=>this.setState({isActive: !this.state.isActive})}
                        /> &nbsp;&nbsp;
                    </div>
                    <br />
                    <div className="form-group">
                        <button type="submit" 
                                className="btn btn-primary"
                                onClick={this.getFormData}
                        >Get Form Data</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormOne