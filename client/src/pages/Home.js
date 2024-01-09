import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <p>This is the home page</p>
      <a href='/auth/google'>Authenticate with Google</a>
    </>
  );
}

export default Home;
