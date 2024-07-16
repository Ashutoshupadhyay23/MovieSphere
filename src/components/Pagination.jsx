import React from 'react';

const Pagination = ({ pageNo, totalPages, handlePrev, handleNext, loading }) => {
  return (
    <div className="flex justify-center mt-5 w-full">
      <button
        className={`bg-gray-200 text-gray-700 py-2 px-4 rounded-l w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handlePrev}
        disabled={pageNo === 1 || loading}
      >
        {loading ? 'Loading...' : <i className="fa-solid fa-arrow-left"></i>}
      </button>
      <span className="bg-gray-200 text-gray-700 py-2 px-4 w-full text-center">
        Page {pageNo}
      </span>
      <button
        className={`bg-gray-200 text-gray-700 py-2 px-4 rounded-r w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleNext}
        disabled={pageNo === totalPages || loading}
      >
        {loading ? 'Loading...' : <i className="fa-solid fa-arrow-right"></i>}
      </button>
    </div>
  );
};

export default Pagination;

