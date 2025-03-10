const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

async function httpGetAllJobs() {
  const response = await fetch(`${API_URL}/jobs/all`);
  return await response.json();
}

export { httpGetAllJobs };
