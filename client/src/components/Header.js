import React from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import GoogleOuathLogin from './GoogleOuathLogin';
import InvalidUser from '../pages/InvalidUser';
import CreateNewJob from '../pages/createNewJob';
import UpdateJob from '../pages/updateJob';

function Header() {
  const UserId = localStorage.getItem('userId');
  const id = UserId;
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <a href='/auth/google'>Authenticate with Google</a>
          </li>
          <li>
            <Link to={`/users/${id}`}>Profile</Link>
          </li>
          <li>
            <Link to='/jobs/new'>Create a new job</Link>
          </li>
        </ul>
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
      </Routes>
    </>
  );
}

export default Header;
