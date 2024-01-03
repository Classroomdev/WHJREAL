import React from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

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
            <a href='/auth/google'>Authenticate with Google</a>
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
          path='/users/:id'
          element={<Profile />}
        />
      </Routes>
    </>
  );
}

export default Header;
