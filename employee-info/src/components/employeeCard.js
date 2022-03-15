import React from "react";
import { appTheme } from "./theme";
import "../styles/component.css"



function EmployeeName(props) {
    return (
        <div id="name" style={{ color: appTheme.palette.themeSecondary }}>{props.name}</div>
    );
}

function EmployeeTitle(props) {
    return (
        <div id='title'>{props.title}</div>
    );
}

function EmployeeCountry(props) {
    return (
        <div id='addrressLine'>{props.country}</div>
    );
}

function EmployeeContact(props) {
    return (
        <div id='contactinfo'>{props.phone}</div>
    );
}


function EmployeeAddress(props) {
    return (
        <div id='addressLine'>
            <div>Address: </div>
            <span>{props.address}</span>
            <br></br>
            <span>{props.city}, {props.region}</span>
            <br></br>
            <span>{props.country}</span>
            <br></br>
            <span>Postal Code: {props.postalCode}</span>
        </div>
    );
}

function EmployeeBio(props){
    return(
        <div id='bio'>
            <p>{props.bio}</p>
        </div>
    );
}

class EmployeeCard extends React.Component {

    render() {
        const emp = this.props.employeeData;
        return (
            <div class='EmployeeCard' style={{ display: this.props.display ? "block" : "none" }} >
                <EmployeeName name={emp.name} />
                <EmployeeTitle title={emp.title} />
                <EmployeeBio bio={emp.bio}/>
                <hr></hr>
                <div id="contactInfo">
                <EmployeeContact phone={emp.phone} />
                <EmployeeAddress address={emp.address} city={emp.city} region={emp.region} postalCode={emp.postalCode} country={emp.country} />
                </div>
            </div>
        );
    }
}

export { EmployeeCard }