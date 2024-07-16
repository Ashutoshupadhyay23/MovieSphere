import React from 'react';

const Pagination = ({ pageNo, totalPages, handlePrev, handleNext, loading }) => {
  return (
    <div className="flex justify-center mt-5 w-full">
      {loading ? (
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 mr-2"></div>
          <span>Loading...</span>
        </div>
      ) : (
        <>
          <button
            className={`bg-gray-200 text-gray-700 py-2 px-4 rounded-l w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handlePrev}
            disabled={pageNo === 1}
          >
            <div className='text-blue-500'>
              <i className="fa-solid fa-arrow-left text-blue-500 mr-1"></i>
              Back
            </div>
          </button>
          <span className="bg-gray-200 text-gray-700 py-2 px-4 w-full text-center">
            Page {pageNo}
          </span>
          <button
            className={`bg-gray-200 text-gray-700 py-2 px-4 rounded-r w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleNext}
            disabled={pageNo === totalPages}
          >
            <div className='text-blue-500'>
              Next
              <i className="fa-solid fa-arrow-right text-blue-500 ml-1"></i>
            </div>
          </button>
        </>
      )}
     
    </div>
  );
};

export default Pagination;

