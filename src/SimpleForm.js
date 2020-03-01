import { Component } from "react";
import React from "react";
import { Field, reduxForm } from "redux-form";
import './SimpleForm.css';
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
                    />
                <Field 
                    name="password"
                    label="Password" 
                    type="password" 
                    component = {SimpleFormInput} 
                    className = "simpleForm__input"
                    />
                <button type="submit" className="simpleForm__btn">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: "simple"
})(SimpleForm);