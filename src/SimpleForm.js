import { Component } from "react";
import React from "react";
import { Field, reduxForm } from "redux-form";
import './SimpleForm.css';
import { required, minLength, maxLength } from "./validation";
import SimpleFormInput from "./SimpleFormInput";

class SimpleForm extends Component{
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="simpleForm">
                <Field 
                    name="username"
                    label="Username" 
                    type="text" 
                    component = {SimpleFormInput} 
                    className = "simpleForm__input"
                    validate={[ required, minLength, maxLength ]}
                    />
                <Field 
                    name="password"
                    label="Password" 
                    type="password" 
                    component = {SimpleFormInput} 
                    className = "simpleForm__input"
                    validate={[ required, minLength, maxLength ]}
                    />
                <Field 
                    name="remember" 
                    label="Remember me?"
                    type="checkbox" 
                    component={SimpleFormInput}
                    className="simpleForm__input--inline"
                    />
                <button type="submit" className="simpleForm__btn">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: "simple"
})(SimpleForm);