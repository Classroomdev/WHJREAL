import React from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import { httpGetUserId } from '../hooks/requests';
import GoogleOuathLogin from './GoogleOuathLogin';

function Header() {
  const id = 1;
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/auth/google'>Authenticate with Google</Link>
          </li>
          <li>
            <Link to={`/users/${id}`}>Profile</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/auth/google'
          element={<GoogleOuathLogin />}
        />
        <Route
          path='/users/:id'
          element={<Profile />}
        />
      </Routes>
    </>
  );
}

export default Header;
