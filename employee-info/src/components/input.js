import React from "react";
import { TextField } from '@fluentui/react/lib/TextField'


class InputBox extends React.Component {

    val_check = (value) => {
        if (parseInt(value) > 0 && parseInt(value) < 10) {
            this.props.onChange(parseInt(value) - 1);
            return '';
        } else if (value === '') {
            this.props.onChange(- 1);
            return '';
        } else {
            return 'Please enter a valid number between 1-9'
        }
    };

    render() {
        return (
            <div class='InputBox' style={{ top: !this.props.display ? "100px" : "65%" }}>
                <TextField label='Enter Employee Id' placeholder="Id ranges from 1-9" onGetErrorMessage={this.val_check} />
            </div>
        );
    }
}

export { InputBox }