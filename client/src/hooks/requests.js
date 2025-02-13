const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://whjreal-backend.onrender.com/api"
    : "http://localhost:8080/api";

async function httpGetUserById(id) {
  const response = await fetch(`${API_URL}/users/${id}`);
  return await response.json();
}

async function httpGetJobById(id) {
  const response = await fetch(`${API_URL}/jobs/${id}`);
  return await response.json();
}

async function httpCreateNewJob(job) {
  console.log("this is reaching here");
  try {
    return await fetch(`${API_URL}/jobs/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

async function httpGetAllJobs() {
  const response = await fetch(`${API_URL}/jobs/all`);
  return await response.json();
}

async function httpGetFeaturedJobs() {
  const response = await fetch(`${API_URL}/jobs/featured`);
  return await response.json();
}

export {
  httpGetUserById,
  httpCreateNewJob,
  httpUpdateJob,
  httpGetJobById,
  httpGetAllJobs,
  httpGetFeaturedJobs,
};
