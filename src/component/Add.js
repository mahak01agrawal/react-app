import React from "react";
import superagent from "superagent";

class Add extends React.Component {
    constructor(){
        super();
        this.state = {
            name : "",
            email : "",
            password : "",
            department : "",
            salary : "",
            image : "",
            component : ""
        }
    }

    signup = () =>{
        superagent.post("http://localhost:8080/add-employee")
        .send({
            name : this.state.name,
            email : this.state.email,
            password : this.state.password,
            salary : this.state.salary,
            department : this.state.department,
            image : this.state.image,
        }).set("Accept","application/json")
        .then(result=>{
            console.log(result);
            alert("Record Inserted....");
        }).catch(err=>{
            console.log(err);
        })
    }
    render() {
        return <>
            <div className="container">
                <div className="form-group mt-2">
                    <label>Name : </label>
                    <input type="text" className="form-control" onChange={(e)=>{this.setState({name : e.target.value})}}/>
                </div>
                <div className="form-group mt-2">
                    <label>Email : </label>
                    <input type="email" className="form-control" onChange={(e)=>{this.setState({email : e.target.value})}}/>
                </div>
                <div className="form-group mt-2">
                    <label>Password : </label>
                    <input type="password" className="form-control" onChange={(e)=>{this.setState({password : e.target.value})}}/>
                </div>
                <div className="form-group mt-2">
                    <label>Salary : </label>
                    <input type="text" className="form-control" onChange={(e)=>{this.setState({salary : e.target.value})}}/>
                </div>
                <div className="form-group mt-2">
                    <label>Department : </label>
                    <input type="text" className="form-control" onChange={(e)=>{this.setState({department : e.target.value})}}/>
                </div>
                <div className="form-group mt-2">
                    <label>Image URL : </label>
                    <input type="text" className="form-control" onChange={(e)=>{this.setState({image : e.target.value})}}/>
                </div>
                <div className="form-group mt-2">
                    <input type="submit" className="form-control btn btn-success" onClick={this.signup}/>
                </div>
            </div>
        </>
    }
}
export default Add;