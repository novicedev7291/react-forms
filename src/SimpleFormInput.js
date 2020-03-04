import React from "react";

const SimpleFormInput = (props) => {
    const { meta } = props;
    return (
        <div className="simpleForm__wrapper">
            <label htmlFor={props.input.name} className="simpleForm__label">{props.label}</label>
            <input {...props.input} type={props.type} component="input" className={props.className} />
            {meta.error && meta.touched && <div style={{color: "red"}}>{meta.error}</div>}
        </div>
    );
};

export default SimpleFormInput;