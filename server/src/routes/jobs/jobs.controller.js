const {
  createNewJob,
  updateJobById,
  getJobById,
  getAllJobs,
  getFeaturedJobs,
} = require('../../models/jobs/jobs.model');

const { getPagination } = require('../../services/query');

async function httpAddNewJob(req, res) {
  try {
    const newJob = req.body;
    await createNewJob(newJob);
    return res.status(201).json(newJob);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function httpUpdateJobById(req, res) {
  try {
    const jobId = req.params.id;
    const updatedJob = req.body;
    await updateJobById(jobId, updatedJob);

    return res.status(200).json(updatedJob);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function httpGetJobById(req, res) {
  const id = req.params.id;
  const job = await getJobById(id);
  return res.status(200).json(job);
}

async function httpGetAllJobs(req, res) {
  try {
    const { skip, limit } = getPagination(req.query);
    const jobs = await getAllJobs(skip, limit);
    return res.status(200).json(jobs);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function httpGetFeaturedJobs(req, res) {
  try {
    const jobs = await getFeaturedJobs();
    return res.status(200).json({ jobs });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Internal Server error' });
  }
}

module.exports = {
  httpAddNewJob,
  httpUpdateJobById,
  httpGetJobById,
  httpGetAllJobs,
  httpGetFeaturedJobs,
};
