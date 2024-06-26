import React from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/users/Profile';
import GoogleOuathLogin from './GoogleOuathLogin';
import InvalidUser from '../pages/users/InvalidUser';
import CreateNewJob from '../pages/jobs/createNewJob';
import UpdateJob from '../pages/jobs/updateJob';
import JobsIndex from '../pages/jobs/JobsIndex';
import Job from '../pages/jobs/Job';

function Header() {
  const UserId = localStorage.getItem('userId');
  const id = UserId;
  return (
    <>
      <nav class='border-b'>
        <div class='flex justify-between w-9/10 mx-auto items-center  my-3'>
          <Link
            to='/'
            class='font-bold text-2xl'
          >
            We Hire Juniors
          </Link>
          <ul class='flex justify-between w-1/5 text-gray-600 text-lg'>
            <li>
              <Link to={`/users/${id}`}>Profile</Link>
            </li>
            <li>
              <Link to='/jobs/all'>Jobs</Link>
            </li>
            <li>
              <Link
                to='/login'
                class='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/auth/google/callback'
          element={<GoogleOuathLogin />}
        />
        <Route
          path='/users/:id'
          element={<Profile />}
        />
        <Route
          path='/usernotfound'
          element={<InvalidUser />}
        />
        <Route
          path='/jobs/new'
          element={<CreateNewJob />}
        />
        <Route
          path='/jobs/:id'
          element={<UpdateJob />}
        />
        <Route
          path='/jobs/all'
          element={<JobsIndex />}
        />
        <Route
          path='/jobs/index/:id'
          element={<Job />}
        />
      </Routes>
    </>
  );
}

export default Header;
