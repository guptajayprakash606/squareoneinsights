import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './navbar';
import Pagination from './Pagination';
import SortDropdown from './SortDropdown';

const TaskTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tasks = useSelector((state) => state.tasks.tasks);
  const itemsPerPage = 2;
  const totalItems = tasks.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [sortOption, setSortOption] = useState('name');
  const [sortedTasks, setSortedTasks] = useState([...tasks]); // Initial sorting
  const [searchedTasks, setSearchedTasks] = useState([]);
  const handleSortChange = (value) => {
    setSortOption(value);

    const sorted = [...tasks]; // Create a new array
    sorted.sort((a, b) => {
      if (value === 'name') {
        return a.name.localeCompare(b.name);
      } else if (value === 'dateLastEdited') {
        return new Date(b.dateLastEdited) - new Date(a.dateLastEdited);
      }
      return 0; // Default case
    });

    setSortedTasks(sorted);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (searchQuery) => {
    const filtered = sortedTasks.filter((task) =>
      task.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchedTasks(filtered);
  };

  const displayedTasks = searchedTasks.length > 0 ? searchedTasks : sortedTasks;

  const paginatedTasks = displayedTasks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className='container'>
        <SortDropdown onSortChange={handleSortChange} />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTasks.map((task, index) => (
              <tr key={index}>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>{task.category}</td>
                <td>{task.dateLastEdited}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </>
  );
};

export default TaskTable;
