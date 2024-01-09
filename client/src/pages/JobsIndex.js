import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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

  console.log(jobs);

  return (
    <>
      <button
        onClick={handlePrevClick}
        disabled={page === 1}
      >
        Prev
      </button>
      <span>Page {page}</span>
      <button
        onClick={handleNextClick}
        // disabled={page === totalPages}
      >
        Next
      </button>
      <ul>
        {jobs.map((job) => (
          <li>{job.companyName}</li>
        ))}
      </ul>
    </>
  );
}

export default JobsIndex;
