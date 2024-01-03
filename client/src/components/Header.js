import React from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';

function Header() {
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
        </ul>
      </nav>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
    </>
  );
}

export default Header;
