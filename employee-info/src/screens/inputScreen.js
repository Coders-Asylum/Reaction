import React from "react";
import { EmployeeCard } from "../components/employeeCard";
import { Employee, EmployeeData } from "../backend/json";
import { InputBox } from '../components/input';
import '../App.css';





class InputScreen extends React.Component {
    emps = [];
    constructor(props) {
        super(props);
        this.e = new EmployeeData();
        this.emps = this.e.allEmployees();
        this.state = { employee: new Employee, display: false }
    }

    onChange = (id) => {
        if (id == -1) {
            this.setState({ display: false });
        } else {
            this.setState({ employee: this.emps[id], display: true });
        }
    };

    render() {
        return (
            <div class='AppBody'>
                <EmployeeCard display={this.state.display} employeeData={this.state.employee} />
                <InputBox onChange={this.onChange} display={this.state.display} />
            </div>
        );
    }
}


export { InputScreen }