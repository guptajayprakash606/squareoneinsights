import React, { useState } from 'react';

const SortDropdown = ({ onSortChange }) => {
  const options = [
    { value: 'name', label: 'Sort by Name' },
    { value: 'dateLastEdited', label: 'Sort by Date Last Edited' },
  ];

  const [sortOption, setSortOption] = useState('name');

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setSortOption(selectedValue);
    onSortChange(selectedValue); // Invoke the onSortChange function with the selected value
  };

  return (
    <select className="select-option sortingOption" value={sortOption} onChange={handleSortChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortDropdown;
