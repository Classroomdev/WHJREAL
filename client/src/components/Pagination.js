import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

function Pagination({
  handleNextClick,
  handlePrevClick,
  page,
  marginTop,
  marginBottom,
}) {
  return (
    <div
      style={{ marginTop: marginTop || 0, marginBottom: marginBottom || 0 }}
      className='flex justify-center'
    >
      <div>
        <nav
          className='isolate inline-flex -space-x-px rounded-md shadow-sm'
          aria-label='Pagination'
        >
          <button
            onClick={handlePrevClick}
            disabled={page === 1}
            className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
          >
            <span className='sr-only'>Previous</span>
            <ChevronLeftIcon
              className='h-5 w-5'
              aria-hidden='true'
            />
          </button>
          <span
            onClick={handleNextClick}
            aria-current='page'
            className='relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            {page}
          </span>
          <button
            onClick={handleNextClick}
            className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
          >
            <span className='sr-only'>Next</span>
            <ChevronRightIcon
              className='h-5 w-5'
              aria-hidden='true'
            />
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
