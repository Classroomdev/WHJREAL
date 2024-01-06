const API_URL = 'http://localhost:8000/api';

async function httpGetUserById(id) {
  const response = await fetch(`${API_URL}/users/${id}`);
  return await response.json();
}

async function httpCreateNewJob(job) {
  try {
    return await fetch(`${API_URL}/jobs/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

async function httpUpdateJob(id, job) {
  try {
    return await fetch(`${API_URL}/jobs/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

export { httpGetUserById, httpCreateNewJob, httpUpdateJob };
