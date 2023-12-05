import React, { useState } from 'react';
import Buttons from './Buttons';

const SearchBar = ({ onSearch }) => {
  console.log(onSearch)
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="search-input"
      />
      <Buttons onClick={handleSearch} className="button green search-button" name="Search" />
    </div>
  );
};

export default SearchBar;
