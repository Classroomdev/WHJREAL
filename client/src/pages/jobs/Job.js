import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { httpGetJobById } from '../../hooks/requests';

function Job() {
  const [job, setJob] = useState({});

  const { id } = useParams();

  const getJobById = async () => {
    const job = await httpGetJobById(id);
    setJob(job);
  };

  useEffect(() => {
    getJobById();
  }, []);

  return (
    <>
      <p>{job.companyName}</p>
    </>
  );
}

export default Job;
