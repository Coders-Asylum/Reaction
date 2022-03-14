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

class EmployeeCard extends React.Component {

    render() {
        return (
            <div class='EmployeeCard'>
                <EmployeeName name="Ms. Davolio Nancy" />
                <EmployeeTitle title="Sales Representative" />
                <hr></hr>
                <EmployeeContact phone='(206) 555-9857' />
                <EmployeeAddress address='>507 - 20th Ave. E.Apt. 2A' city='Seattle' region='WA' postalCode='98122' country='USA'/>
            </div>
        );
    }
}

export { EmployeeCard }