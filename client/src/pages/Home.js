import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { httpGetFeaturedJobs } from '../hooks/requests';
import JobCard from '../components/JobCard';
import Footer from '../components/Footer';
import advantages from '../hooks/advantages';

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
      <div class='h-screen bg-gradient-to-r from-sky-500 to-indigo-500'>
        <div class='py-16 w-1/2 md:mx-auto md:text-center xl:max-w-none'>
          <h2 class='font-display font-bold text-4xl tracking-tighter text-white'>
            Unlocking Tomorrow's Talent Today
          </h2>
          <p class='mt-6 text-lg text-blue-100 tracking-wide'>
            Effortless Hiring, Leave the Rest to Us: Your Time-Saving Solution
            for Junior Talent Acquisition.
          </p>
        </div>
        <div class='flex flex-wrap justify-between w-9/10 mx-auto'>
          {advantages.map((advantage) => (
            <div class='w-2/5 mb-10'>
              <div class='w-3/4'>
                <h3 class='text-xl text-white font-extrabold tracking-tight'>
                  {advantage.title}
                </h3>
                <p class='mt-2 text-blue-100'>{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class='py-16 bg-hero'>
        <div class='mx-auto max-w-2xl md:text-center'>
          <h2 class='font-display font-bold text-5xl tracking-tighter text-gray-800'>
            Featured Jobs
          </h2>
          <p class='mt-4 text-lg tracking-wider text-slate-700 dark:text-gray-200'>
            Look through some of our featured jobs
          </p>
        </div>
        <div class='mx-auto w-4/5 pt-16 flex flex-wrap justify-between'>
          {jobs.map((job) => (
            <JobCard job={job} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
