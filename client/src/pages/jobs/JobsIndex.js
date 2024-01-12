import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import JobCard from '../../components/JobCard';
import Footer from '../../components/Footer';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

function JobsIndex() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState([]);

  const getAllJobs = async () => {
    const response = await fetch(
      `http://localhost:8000/api/jobs/all?page=${page}`
    );
    const jobs = await response.json();
    setJobs(jobs);
  };

  useEffect(() => {
    getAllJobs();
    searchParams.set('page', page);
    navigate(`?${searchParams.toString()}`, { replace: true });
  }, [page, navigate, location.search]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePrevClick = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  const handleNextClick = () => {
    handlePageChange(page + 1);
  };

  return (
    <div class='bg-hero py-10'>
      <h1 class='text-5xl font-extrabold tracking-tight text-center'>Jobs</h1>
      <p class='mt-2 text-center text-xl text-gray-700 dark:text-gray-300/75'>
        Apply for one of jobs below
      </p>
      <div className='flex justify-center mt-10'>
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
      <div class='mx-auto w-4/5 py-16 flex flex-wrap justify-between'>
        {jobs.map((job) => (
          <JobCard
            job={job}
            numberOfTitleCharacters={40}
            numberOfDescriptionCharacters={400}
            width={'49%'}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default JobsIndex;
