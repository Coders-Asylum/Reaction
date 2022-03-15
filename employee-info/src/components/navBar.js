import React from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import { appTheme } from "./theme";
import "../styles/component.css"



function NavBarElement(props) {
    return (
        < div style={{ width: props.width + 'px', height: props.height + 'px' }} class="NavBarElement">
            <div class="NavElement"><Icon iconName={props.navElement.icon} id="icon" /></div>
            <div class="NavElement">{props.navElement.name}</div>
        </div>
    );
}

class NavElement {
    name = 'undefined'
    icon = 'EmojiDisapointed'
    constructor({ navName, icon } = {}) {
        this.icon = icon;
        this.name = navName;

    }
}

class Navbar extends React.Component {
    _d = new Date().toDateString;

    constructor(props) {
        super(props);
        this._d = new Date();
        console.log(this._d)
    }

    _navElements = [
        new NavElement({ navName: `${this._d.toString()}`, icon: "DateTime" }),
        new NavElement({ navName: 'Alex Claudia', icon: "Contact" }),
        new NavElement({ navName: 'Settings', icon: "Settings" }),
    ];


    render() {
        return (
            <div class='NavBar' style={{ color: appTheme.palette.blue }}>
                <h1 class="NavBarElement"> Employee Info </h1>
                <NavBarElement width={170} height={45} navElement={this._navElements[2]} />
            </div >
        );
    }
}

export { NavBarElement, Navbar, NavElement }