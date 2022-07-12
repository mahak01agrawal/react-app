import React from "react";
import superagent from "superagent";

class AddWithFile extends React.Component {
    constructor(){
        super();
        this.state = {
            name : "",
            email : "",
            password : "",
            department : "",
            salary : "",
            image : {},
            component : ""
        }
    }

    signup = () =>{
        const formData = new FormData();
        formData.append("name",this.state.name);
        formData.append("email",this.state.email);
        formData.append("password",this.state.password);
        formData.append("salary",this.state.salary);
        formData.append("department",this.state.department);
        formData.append("file",this.state.image);

        superagent.post("http://localhost:8080/add-employee-with-file")
        .send(formData).set("Accept","application/json")
        .then(result=>{
            console.log(result);
            alert("Record Inserted....");
        }).catch(err=>{
            console.log(err);
        });
    }

    addImage = (e) =>{
        this.setState({image : e.target.files[0]});
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
                    <input type="file" className="form-control" onChange={(e)=>this.addImage(e)}/>
                </div>
                <div className="form-group mt-2">
                    <input type="submit" className="form-control btn btn-success" onClick={this.signup}/>
                </div>
            </div>
        </>
    }
}
export default AddWithFile;