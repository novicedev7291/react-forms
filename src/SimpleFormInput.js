import React from "react";

const SimpleFormInput = (props) => {
    console.log(props);
    return (
        <div className="simpleForm__wrapper">
            <label htmlFor={props.input.name} className="simpleForm__label">{props.label}</label>
            <input name={props.input.name} type={props.type} component="input" className={props.className} />
        </div>
    );
};

export default SimpleFormInput;