import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { httpGetUserById } from '../hooks/requests';

function Profile() {
  const [profile, setProfile] = useState(null);

  const id = localStorage.getItem('userId');

  const getUser = async () => {
    const user = await httpGetUserById(id);
    setProfile(user);
  };

  console.log(profile);

  useEffect(() => {
    getUser();
  }, []);

  if (!profile) {
    return <p>Loading!</p>;
  }

  return (
    <>
      <p>{profile.username}</p>
    </>
  );
}

export default Profile;
