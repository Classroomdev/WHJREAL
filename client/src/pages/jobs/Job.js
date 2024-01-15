import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { httpGetJobById } from '../../hooks/requests';
import ApplyForJobButton from '../../components/ApplyForJobButton';
import Footer from '../../components/Footer';

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
    <div class='bg-hero'>
      <div class='flex w-9/10 mx-auto py-12'>
        <div class='w-2/3'>
          <h2 class='font-bold text-3xl text-gray-00'>{job.jobTitle}</h2>
          <div class='my-10'>
            <span class='text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full'>
              {job.jobType}
            </span>
            <span class='ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full'>
              {job.jobLocation}
            </span>
            <span class='ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full'>
              {job.jobLocation}
            </span>
          </div>
          <p class='text-gray-500 mb-10'>{job.jobDescription}</p>
          <ApplyForJobButton jobLink={job.jobApplicationLink} />
        </div>
        <div class='border border-gray-300 p-5 rounded-md h-fit'>
          <div class='mb-10'>
            {/* Add an image at some point */}
            <p class='text-xl font-bold text-gray-800'>{job.companyName}</p>
          </div>
          <div>{/* Add a job website */}</div>
          <ApplyForJobButton jobLink={job.jobApplicationLink} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Job;
