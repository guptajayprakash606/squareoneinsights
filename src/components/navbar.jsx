import React from "react";
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom'

const Navbar = () => {

  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">JP GUPTA</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/category">Categories</Link>
        </li> */}
        <li className="nav-item">
          <Link to="/taskForm">Add Task</Link>
        </li>
        <li className="nav-item">
          <Link to="/taskTable">Task Table</Link>
        </li>
      </ul>
      <SearchBar onSearch={handleSearch} />
    </nav>
  );
};

export default Navbar;
