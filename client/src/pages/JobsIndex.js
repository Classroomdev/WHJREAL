import React, { useState, useEffect } from 'react';
import { httpGetAllJobs } from '../hooks/requests';

function JobsIndex() {
  const [jobs, setJobs] = useState([]);

  const getAllJobs = async () => {
    const jobs = await httpGetAllJobs();
    setJobs(jobs);
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <>
      {jobs.map((job) => (
        <p>{job.companyName}</p>
      ))}
    </>
  );
}

export default JobsIndex;
