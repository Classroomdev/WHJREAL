import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div class='bg-hero mx-auto text-center py-20 h-screen'>
      <h1 class='mx-auto max-w-5xl text-6xl tracking-tight sm:text-7xl mt-16 font-bold text-gray-700'>
        We believe{' '}
        <span class='relative whitespace-nowrap text-blue-500'>Juniors</span>{' '}
        have the skills to{' '}
        <span class='relative whitespace-nowrap text-blue-500'>
          get the job done.
        </span>
      </h1>
      <p class='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 dark:text-gray-200 mb-12'>
        Discover top-tier Junior and Mid-level professionals or find the perfect
        fit for your internship. Post your job now and tap into a pool of
        thousands of skilled candidates eager to make a difference.
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
  );
}

export default Home;
