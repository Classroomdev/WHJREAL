import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { httpGetFeaturedJobs } from '../hooks/requests';
import truncateString from '../functions/truncateString';

function Home() {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    const jobs = await httpGetFeaturedJobs();
    setJobs(jobs);
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <>
      <div class='bg-hero mx-auto text-center py-20 h-full'>
        <h1 class='mx-auto max-w-5xl text-6xl tracking-tight sm:text-7xl mt-16 font-bold text-gray-700'>
          We believe{' '}
          <span class='relative whitespace-nowrap text-blue-500'>Juniors</span>{' '}
          have the skills to{' '}
          <span class='relative whitespace-nowrap text-blue-500'>
            get the job done.
          </span>
        </h1>
        <p class='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 dark:text-gray-200 mb-12'>
          Discover top-tier Junior and Mid-level professionals or find the
          perfect fit for your internship. Post your job now and tap into a pool
          of thousands of skilled candidates eager to make a difference.
        </p>
        <div class='flex justify-center'>
          <a
            href='/auth/google'
            class='px-4 py-2 border inline-flex gap-2 border-slate-200 dark:border-slate-700 rounded text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 mr-6'
          >
            <img
              class='w-6 h-6'
              src='./svg/google-color.svg'
              loading='lazy'
              alt='google logo'
            />
            <span>Login with Google</span>
          </a>
          <Link
            to='/jobs/new'
            class='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'
          >
            Post a Job
          </Link>
        </div>
      </div>
      <div class='py-16'>
        <div class='mx-auto max-w-2xl md:text-center'>
          <h2 class='font-display font-bold text-5xl tracking-tighter text-gray-800'>
            Featured Jobs
          </h2>
          <p class='mt-4 text-lg tracking-wider text-slate-700 dark:text-gray-200'>
            Look through some of our featured jobs
          </p>
        </div>
        <div className='mx-auto w-4/5 pt-16 flex flex-wrap justify-between'>
          {jobs.map((job) => (
            <div class='w-3/10 border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded p-4 flex flex-col justify-between mb-4 min-h-70'>
              <div class='flex flex-col'>
                <div class='flex items-center'>
                  <img
                    class='w-10 h-10 rounded-full mr-4'
                    src='/svg/google-color.svg'
                    alt='Avatar of Jonathan Reinink'
                  />
                  <div class='text-sm'>
                    <p class='text-gray-900 leading-none'>Jonathan Reinink</p>
                    <p class='text-gray-600'>Aug 18</p>
                  </div>
                </div>
                <div class='my-8'>
                  <p class='text-sm text-gray-600 flex items-center'>
                    <svg
                      class='fill-current text-gray-500 w-3 h-3 mr-2'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z' />
                    </svg>
                    This may be useful for something
                  </p>
                  <div class='text-gray-900 font-bold text-xl mb-2'>
                    {truncateString(job.jobTitle, 25)}
                  </div>
                  <p class='text-gray-700 text-base'>
                    {truncateString(job.jobDescription, 250)}
                  </p>
                </div>
              </div>
              <div>
                <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  #{job.jobLocation}
                </span>
                <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  #{job.jobType}
                </span>
                <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  #Job Contract
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
