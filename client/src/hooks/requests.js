const API_URL = 'http://localhost:8000/api';

async function httpGetUserById(id) {
  const response = await fetch(`${API_URL}/users/${id}`);
  return await response.json();
}

export { httpGetUserById };
