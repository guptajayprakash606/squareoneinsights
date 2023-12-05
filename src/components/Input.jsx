// InputField.js
import React from 'react';

const InputField = (props) => {
  return (
    <div className="input-field">
      <label htmlFor={props.label}>{props.label}:</label>
      <input
        type={props.type}
        id={props.label}
        name={props.name}
        value={props.value}
        onChange={props.onChangeEvent}
        required ={props.required}
        disabled = {props.disabled}
      />
    </div>
  );
};

export default InputField;
