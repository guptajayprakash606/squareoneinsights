import React from 'react';

const SelectOption = ({ options, value, onChange, name }) => {
  return (
    <select className="select-option" name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;

