import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <ul className="pagination">
      <li>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          {'<'}
        </button>
      </li>
      {pageNumbers.map((page) => (
        <li key={page} className={page === currentPage ? 'active' : ''}>
          <button onClick={() => onPageChange(page)}>{page}</button>
        </li>
      ))}
      <li>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          {'>'}
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
