import React from "react";
import superagent from "superagent";

class View extends React.Component {
    constructor() {
        super();
        this.state = {
            employees: [],
            id: 0,
            name: "",
            email: "",
            password: "",
            salary: 0,
            department: "",
            image: ""
        }
    }
    componentDidMount() {
        superagent.get("http://localhost:8080/view-all")
            .set("Accept", "application/json")
            .then(result => {
                this.setState({ employees: result.body });
            }).catch(err => {
                console.log(err);
            })
    }
    getData = (id, name, email, password, salary, department, image) => {
        console.log("")
        this.setState({ id: id });
        this.setState({ name: name });
        this.setState({ email: email });
        this.setState({ password: password });
        this.setState({ salary: salary });
        this.setState({ department: department });
        this.setState({ image: image });
    }

    update = () => {
        let employee = {
            name: this.state.name,
            email: this.state.email,
            id: this.state.id,
            password: this.state.password,
            salary: this.state.salary,
            department: this.state.department,
            image: this.state.image,
        }
        superagent.put("http://localhost:8080/update-by-id", employee)
            .set("Accept", "application/json")
            .then(result => {
                // this.componentDidMount();
            }).catch(err => {
                console.log(err);
            })
    }

    delete = (id) => {
        if (window.confirm("Are you Sure")) {
            superagent.delete("http://localhost:8080/delete-by-id?id=" + id)
                .set("Accept", "application/json")
                .then(result => {
                    this.setState({
                        employees: this.state.employees.filter(emp => {
                            return emp.id !== id;
                        })
                    })
                }).catch(err => {
                    console.log(err);
                })
        }
    }
    render() {
        return <>
            <table className="table">
                <thead>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Salary</th>
                    <th>Package</th>
                    <th>Deaprtment</th>
                    <th>Update</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {this.state.employees.map((employee, idx) => {
                        return <tr>
                            <td>{employee.id}</td>
                            <td> <img src={employee.image} width="50" height="50" /></td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.password}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.pack}</td>
                            <td>{employee.department}</td>

                            <td><button className="btn btn-warning" data-toggle="modal" data-target="#myModel" onClick={() =>
                                this.getData(employee.id, employee.name, employee.email, employee.password, employee.salary, employee.department, employee.image)
                            }>Update</button></td>
                            <td><button className="btn btn-danger" onClick={() => this.delete(employee.id)}>Delete</button></td>

                        </tr>
                    })}
                </tbody>
            </table>

            <div id="myModel" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <div className="form-group mt-2">
                                <label>Name : </label>
                                <input type="text" className="form-control" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                            </div>
                            <div className="form-group mt-2">
                                <label>Email : </label>
                                <input type="email" className="form-control" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                            </div>
                            <div className="form-group mt-2">
                                <label>Password : </label>
                                <input type="password" className="form-control" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            </div>
                            <div className="form-group mt-2">
                                <label>Salary : </label>
                                <input type="text" className="form-control" value={this.state.salary} onChange={(e) => { this.setState({ salary: e.target.value }) }} />
                            </div>
                            <div className="form-group mt-2">
                                <label>Department : </label>
                                <input type="text" className="form-control" value={this.state.department} onChange={(e) => { this.setState({ department: e.target.value }) }} />
                            </div>
                            <div className="form-group mt-2">
                                <label>Image URL : </label>
                                <input type="text" className="form-control" value={this.state.image} onChange={(e) => { this.setState({ image: e.target.value }) }} />
                            </div>
                            <div className="form-group mt-2">
                                <input type="submit" value="Edit" className="btn btn-info" data-dismiss="modal" onClick={this.update} />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    }
}
export default View;