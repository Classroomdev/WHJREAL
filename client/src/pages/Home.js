import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div class='bg-hero mx-auto text-center py-20 h-screen'>
      <h1 class='mx-auto max-w-5xl text-6xl tracking-tight sm:text-7xl my-16'>
        We believe{' '}
        <span class='relative whitespace-nowrap text-blue-600'>Juniors</span>{' '}
        have the skills to get the job done
      </h1>
      <a href='/auth/google'>Authenticate with Google</a>
      <li>
        <Link to='/jobs/new'>Post a Job</Link>
      </li>
    </div>
  );
}

export default Home;
